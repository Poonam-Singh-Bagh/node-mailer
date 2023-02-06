const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "poonambagh@outlook.com",
    pass: "crazypooh1379",
  },
});

const options = {
  from: "poonambagh@outlook.com",
  to: "poonam@navgurukul.org",
  subject: "sending email with nodemailer",
  text: "Have a few questions",
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log("info", info.response);
});
