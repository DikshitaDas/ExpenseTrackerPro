const nodemailer = require("nodemailer")

const emailManager = async (to, text, html, subject) => {
       // Set up the email transporter with Mailtrap configuration (used for testing emails)
       var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "a06576c793be3d",
        pass: "b538c607e50370"
        }
    });

    // Send the email with the specified details (recipient, message, and subject)
    await transport.sendMail({
        to: to,
        from: "info@expensetracker.com",
        text: text,
        html : html,
        subject : subject,
    });
}

module.exports = emailManager;