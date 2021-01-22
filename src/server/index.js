const uri = process.env.MONGODB_URI;
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    MongoClient.connect(uri, { useUnifiedTopology: true })
      .then(client => {

        const db = client.db('SignUp')
        console.log('Connected to Database')

        db.collection("CreateUser").findOne({}, (err, res) => {
            if (err) {
                console.log("error: ", err)
                return
            }
            console.log("success: ", res)
            client.close();
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

app.get("/api/status", (req, res) => {
    res.send({
        status: "ok",
    })
})

app.post("/api/sign-in", (req, res) => {
    console.log(req.body)
    res.status(200)
    res.send({
        code: 200,
        status: "ok",
        user: req.body,
    })
})

app.post("/api/users", (req, res) => {
    console.log(req.body)
    res.status(200)
    res.send({
        code: 200,
        status: "ok",
        user: req.body,
    })
})

// Create campaign
app.post("/api/:userID/campaigns", (req, res) => {
    res.send({
        status: "ok",
    })
})

// List user campaigns (my campaigns)
app.get("/api/:userID/campaigns", (req, res) => {
    res.send({
        status: "ok",
    })
})

// Pick winner
app.get("/api/:userID/campaigns/:campaignID/winner", (req, res) => {
    res.send({
        status: "ok",
    })
})

// Get campaign (public)
app.get("/api/:userID/campaigns/:campaignID", (req, res) => {
    res.send({
        status: "ok",
    })
})

// Create entry
app.post("/api/:userID/entries", (req, res) => {
    res.send({
        status: "ok",
    })
})

// List user entries (my entires)
app.get("/api/:userID/entries", (req, res) => {
    res.send({
        status: "ok",
    })
})