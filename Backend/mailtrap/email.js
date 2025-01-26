import { sender, transporter } from "./mailtrap.js";


export const sendResetEmail = async(email,url)=>{
   await transporter.sendMail({
    from: `${sender.name} <${sender.email}>`, 
    to: email,
    subject: "Email send ✔ ",
    html: `
    <h1>Reset password</h1>
    <a href='${url}'>Reset Link</a>`,
  });
}

















export const sendSuccessEmail = async(email)=>{
  await transporter.sendMail({
    from: `${sender.name} <${sender.email}>`, 
    to: email,
    subject: "Welcome email ✔ ", // Subject line
    html: `Hello ${email} Welcome to sadiq web`, // html body
  });
}