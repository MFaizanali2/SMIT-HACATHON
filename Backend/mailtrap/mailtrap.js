import nodemailer from 'nodemailer';


export var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e460aa3f3d6c49",
    pass: "4c11d2ab2bd8bb"
  }
});

export const sender = {
  name: "sadiq shah",
  email:"shahsadiq208@gmail.com"
}