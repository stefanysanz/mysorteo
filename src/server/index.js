let ready = false;
let db;
const uri = "mongodb+srv://admin:admin@cluster0.wagrb.mongodb.net/?retryWrites=true&w=majority"
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    MongoClient.connect(uri, { useUnifiedTopology: true })
      .then(client => {

        db = client.db('Sorteo')
        ready = true;
        console.log('Connected to Database')

        db.createCollection("users", (err, res) => {
            if (err) {
                console.log("failed to create users collection: ", err)
            }
        });

        db.createCollection("campaigns", (err, res) => {
            if (err) {
                console.log("failed to create campaigns colleciton: ", err)
            }
        });

        db.createCollection("entries", (err, res) => {
            if (err) {
                console.log("failed to create entries collection: ", err)
            }
        });

      })
      .catch(error => console.error(error))
})

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Status
app.get("/api/status", (req, res) => {
    res.send({
        status: "ok",
    })
})

// Sign-In
app.post("/api/sign-in", (req, res) => {
    console.log("sign-in request received: ", req.body)
    
    // User query
    const query = {
        email: req.body.email,
        password: req.body.password,
    }
    db.collection("users").find(query).toArray((err, res2) => {
        if (err) {
            console.log(err)
            res.status(500)
            return
        }
        console.log(res2)
        
        res.status(200)
        res.send({
            code: 200,
            status: "ok",
            campaigns: res2,
        })
    })
})

// Create user
app.post("/api/users", (req, res) => {
    console.log("createUser request received: ", req.body)

    // Create user record
    const user = {
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
    }
    db.collection("users").insertOne(user, (err, res2) => {
        if (err) {
            console.log(err);
            res.status(500)
            return
        }
    });

    res.status(200)
    res.send({
        code: 200,
        status: "ok",
        user: req.body,
    })
})

// List users
app.get("/api/users", (req, res) => {
    console.log("listUsers request received")

    db.collection("users").find({}).toArray((err, res2) => {
        if (err) {
            console.log(err);
        }
        res.status(200)
        res.send({
            code: 200,
            status: "ok",
            users: res2,
        })
    });

    
})

// Create campaign
app.post("/api/users/:userID/campaigns", (req, res) => {
    console.log("createCampaign request received: ", req.body)

    // Create campaign record
    const campaign = {
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        userID: req.params.userID,
    }
    db.collection("campaigns").insertOne(campaign, (err, res) => {
        if (err) {
            console.log(err);
        }
    });

    // Handle success
    res.status(200)
    res.send({
        code: 200,
        status: "ok",
    })
})

// List user campaigns (my campaigns)
app.get("/api/users/:userID/campaigns", (req, res) => {
    console.log("listCampaigns request received")

    // List campaigns
    const query = {
        userID: req.params.userID,
    }
    db.collection("campaigns").find(query).toArray((err, res2) => {
        if (err) {
            console.log(err)
            res.status(500)
            return
        }
        console.log(res2)
        
        res.status(200)
        res.send({
            code: 200,
            status: "ok",
            campaigns: res2,
        })
    })
})

// Pick winner
app.get("/api/users/:userID/campaigns/:campaignID/winner", (req, res) => {
    console.log("pickAWinner request received")
    res.status(200)
    res.send({
        status: "ok",
    })
})

// Get campaign (public)
app.get("/api/users/:userID/campaigns/:campaignID", (req, res) => {
    res.status(200)
    res.send({
        status: "ok",
    })
})

// Create entry
app.post("/api/users/:userID/entries", (req, res) => {
    console.log("createEntry request received: ", req.body)
    res.status(200)
    res.send({
        status: "ok",
    })
})

// List user entries (my entires)
app.get("/api/users/:userID/entries", (req, res) => {
    res.status(200)
    res.send({
        status: "ok",
    })
})