const databank = require("./database/dbbanking.js")
const datauser = require("./database/dbuser.js")

const path = require("path")
const http = require("http")

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get(`/index2`, function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index2.html"));
})

app.get("/getDatauser", (req, res) => {
    console.log(req.query.username);
    const us = req.query.username;
    const ps = req.query.password;
    datauser.forEach(item => {
        if (us == item.username && ps == item.password) {
            res.json({
                u_id: item.id,
                url: "http://localhost:8080/index2"
            })
        }
    });

})



app.get('/userdata', (req, res) => {
    const user_id = req.query.user_id;
    console.log("uname", user_id)
    databank.forEach(item => {
        if (item.userid == user_id) {
            const found = databank.filter(user => user.userid == user_id && user.types == "1");
            return res.json({ user: found });
        }
    });
})


app.get('/getInfo', function (req, res) {
    const u_id = req.query.user_id;
    let id;
    let name;
    let price;
    datauser.forEach(item => {
        if (item.id == u_id) {
            id = item.id;
            name = item.username;
        }
    })

    res.json({
        us_id: id,
        us_name: name,
        balance: getSumamount(id)
    })

})

function getSumamount(id) {
    var sum = 0;
    databank.forEach(item => {
        if (item.userid == id) {
            if (item.types == "1") {
                sum += item.amount;
            } else {
                sum -= item.amount;
            }
        }
    })

    return sum;
}

app.listen(port, function () {
    console.log("Your app running on port " + port);
    console.log(__dirname);
})

