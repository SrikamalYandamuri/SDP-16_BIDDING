const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Configuration for MongoDB
const uri = 'mongodb+srv://yandamurisrikamal:Srikamal.15@cluster0.l2v2vfh.mongodb.net/'; // Update this with your MongoDB Atlas connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    }
}
connectToMongoDB();

// Define the database and collections
const databaseName = 'MSWDPROJECT'; // Update this with your database name
const usersCollectionName = 'users';
const menuCollectionName = 'menu';
const menusCollectionName = 'menus';

// REGISTRATION MODULE
app.post('/registration/signup', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const users = db.collection(usersCollectionName);
        const data = await users.insertOne(req.body);
        res.json("Registered Successfully...");
    } catch (err) {
        res.status(404).json(err);
    }
});

// LOGIN MODULE
app.post('/login/signin', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const users = db.collection(usersCollectionName);
        const data = await users.count(req.body);
        res.json(data);
    } catch (err) {
        res.status(404).json(err);
    }
});

// HOME MODULE
app.post('/home/uname', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const users = db.collection(usersCollectionName);
        const data = await users.find(req.body, { projection: { firstname: true, lastname: true } }).toArray();
        res.json(data);
    } catch (err) {
        res.status(404).json(err);
    }
});

app.post('/home/menu', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const menu = db.collection(menuCollectionName);
        const data = await menu.find({}).sort({ mid: 1 }).toArray();
        res.json(data);
    } catch (err) {
        res.status(404).json(err);
    }
});

app.post('/home/menus', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const menu = db.collection(menusCollectionName);
        const data = await menu.find(req.body).sort({ smid: 1 }).toArray();
        res.json(data);
    } catch (err) {
        res.status(404).json(err);
    }
});

// CHANGE PASSWORD
app.post('/cp/updatepwd', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const users = db.collection(usersCollectionName);
        const data = await users.updateOne({ emailid: req.body.emailid }, { $set: { pwd: req.body.pwd } });
        res.json("Password has been Updated..");
    } catch (err) {
        res.status(404).json(err);
    }
});

// MyPROFILE
app.post('/myprofile/userinfo', async function(req, res) {
    try {
        const db = client.db(databaseName);
        const users = db.collection(usersCollectionName);
        const data = await users.find(req.body).toArray();
        res.json(data);
    } catch (err) {
        res.status(404).json(err);
    }
});
