const nodemailer = require("nodemailer");
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "1samuelbrhane@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "1samuelbrhane@gmail.com",
      to: "1samuelbrhane@gmail.com",
      subject: `New message from ${data.name} with email address of ${data.email}`,
      text: data.message,
      html: `<h2>${data.message}</h2>`,
    });

    return res.status(200).json({ message: "Message sent." });
  }
  res.status(400).json({ message: "Bad Request" });
};

export default handler;
