const databank = require("./database/dbbanking.js")

const path = require("path")
const http = require("http")

const express = require('express');
const { datauser } = require("./public/js/dbuser.js");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})


app.get("/getDatauser", (req, res) => {
    console.log(req.query.username);
    const uid = req.query.userid;
    const us = req.query.username;
    const ps = req.query.password;
    datauser.forEach(item => {
        if (uid == item.id && us == item.username && ps == item.password) {
            res.json({
                u_id: uid,
                u_name: us,
                p_word: ps
            })
        }
    });

})


app.get('/userdata', (req, res) => {
    const user_id = req.query.user_id;
    console.log("uname", user_id)
    databank.forEach(item => {
        if (item.userid == user_id) {
            const finded = databank.find(user => user.userid == user_id && user.types == "1");
            return res.json({ user: finded });
        }
        console.log("finded", finded);
    });
})


app.listen(port, function () {
    console.log("Your app running on port " + port);
    console.log(__dirname);
})

