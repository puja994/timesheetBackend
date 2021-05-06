import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";
console.log(process.env.EMAIL_SMTP);

let transporter = nodemailer.createTransport({
	host: process.env.EMAIL_SMTP,
	port: 587,
	
	auth: {
		user: process.env.EMAIL_USER, 
		pass: process.env.EMAIL_PASSWORD, 
	},
});


const send = async mailInfo => {
	try {
		let info = await transporter.sendMail(mailInfo);

		console.log("Message sent: %s", info.messageId);
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	} catch (error) {
		console.log(error);
	}
};

export const emailProcessor = ({ type, ...data }) => {
	console.log("from email processer", type, data);
	let info = {
		from: `ABC Shop <${process.env.EMAIL_USER}>`, 
		to: "bar@example.com, baz@example.com", 
		subject: "Hello ✔", 
		text: "Hello world?",
		html: "<b>Hello world?</b>", 
	};

	switch (type) {
		case "OTP_REQUEST":
			info = {
				to: data.email,
				subject: "OTP for your password rest request",
				text: `Hi, here is the OTP for your password reset, ${data.otp} this token will expire in 1 day `,
				html: `
        <div>
        <p>Hello there,</p>
        <p>here is the OTP for your password reset </p>
        <p style="background: ;background: red;display: inline;padding: 10px;color: wheat;font-weight: 900;">${data.otp}</p>
        <p>regards,</p>
      </div>
        `,
			};
			send(info);
			break;

		case "UPDATE_PASS_SUCCESS":
			info = {
				to: data.email,
				subject: "Password update notification",
				text: `Hi,  this is to notify that you password at ABC Shop has been changed just now.  IF you do not recognize this activity, please contact us ASAP `,
				html: `
        <div>
        <p>Hello there,</p>
        <p>this is to notify that you password at ABC Shop has been changed just now. </p>

				<p>IF you do not recognize this activity, please contact us ASAP</p>
        <p>regards,</p>
      </div>`,
			};
			send(info);
			break;

		default:
			break;
	}
};
