const express = require('express');
const app = express();
const port = 3001
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var path;

let Storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null, './images')
  },
  filename:function(req,file,callback){
    callback(null,file.fieldname + "_" + Date.now() + "_" + file.originalname)
  }
})

let upload = multer({
  storage: Storage
})

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json());
app.use(cors());
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile('/index.html')
})


app.post("/send", upload.array('image', 9), function(req, res) {

      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
          
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      transporter.verify((err, success) => {
        err
          ? console.log(err)
          : console.log(`=== Server is ready to take messages: ${success} ===`);
      });

      let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Potential Client ${req.body.firstName} ${req.body.lastName}`,
        text: "New Client Has Arrived",
        html: `<ul> 
          <li>First Name: ${req.body.firstName} </li>
          <li>Last Name: ${req.body.lastName} </li>
          <li>Email: ${req.body.email} </li>
          <li>Phone Number: ${req.body.phoneNumber} </li>
          <li>Within the last 5 years has a professional salon coloured your hair? ${req.body.salonCare} </li>
          <li>When was the last time? ${req.body.salonLast} </li>
          <li>Have you box dyed your hair? ${req.body.usedDye} </li>
          <li>If so, what color did you use? ${req.body.color} </li>
          <li>Did you apply the color yourself or with the assistance of someone else? ${req.body.application} </li>
          <li>When was the last application? ${req.body.lastApplication} </li>  
        </ul>`,
        attachments: [
          {
            path:'/images'
          }
        ]
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          res.json({
            status: "fail",
          });
        } else {
          console.log("== Message Sent ==");
          fs.unlink(path,function(err){
            if(err){
              return res.end(err)
            } else {
              console.log('deleted');
              return res.redirect('/services')
            }
          })
          res.json({
            status: "success",
          });
        }
      });      

    
  


})


     app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });

  