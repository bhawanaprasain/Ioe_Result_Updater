"use strict";
const cherio = require('cherio');
const request = require('request');
var fs = require('fs');

request('https://exam.ioe.edu.np/', (error,response,html) =>{
    if(!error && response.statusCode == 200) {
        const $ = cherio.load(html);
       
        var storedDate = fs.readFileSync('/home/bhawana/Documents/crontab/lastDate.js', 'utf8');
        var presentDate = $('#datatable > tbody > tr:nth-child(1) > td:nth-child(3)').text();
        console.log(presentDate)
        ;
        if(presentDate === storedDate){
            console.log("no update");
        }
        else{
           
            console.log("result has been published");
            fs.writeFileSync('/home/bhawana/Documents/crontab/lastDate.js',presentDate);

            const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
            async function main(){

                // Generate test SMTP service account from ethereal.email
                // Only needed if you don't have a real mail account for testing
                let testAccount = await nodemailer.createTestAccount();

                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: '##@gmail.com', 
                        pass: '########' 
                    }
                });

                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Bhawana Prasain 👻" <jsnodemailer@gmail.com>', // sender address
                    to: "jureli@amritghimire.com, bhawana.prs@gmail.com, baz@example.com", // list of receivers
                    subject: "IOE Result ✔", // Subject line
                    text: "Result has been published", // plain text body
                    // html: "<b>Hello world?</b>" // html body
                });

            }

            main().catch(console.error);

        }
    }
})
            