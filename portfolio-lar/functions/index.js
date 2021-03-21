const functions = require("firebase-functions");
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
// const port = 3000;
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'kristenreed1908@gmail.com', // Enter here email address from which you want to send emails
    pass: 'RhbcnbyfHbl12#' // Enter here password for email account from which you want to send emails
  },
  tls: {
  rejectUnauthorized: false
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let senderName = req.body.contactFormName;
  let senderEmail = req.body.contactFormEmail;
 // let messageSubject = req.body.contactFormSubjects;
  let messageSubject = 'GRN TEST EMAIL'
  let messageText = req.body.contactFormMessage;
  let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: ['kristenreed1908@gmail.com'], // Enter here the email address on which you want to send emails from your customers
    from: senderName,
    subject: messageSubject,
    text: messageText,
    replyTo: senderEmail
  };

  if (senderName === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

//   if (messageSubject === '') {
//     res.status(400);
//     res.send({
//     message: 'Bad request'
//     });
//     return;
//   }

  if (messageText === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (copyToSender) {
    mailOptions.to.push(senderEmail);
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

exports.app = functions.https.onRequest(app);