import nodemailer from 'nodemailer';
import smtp from 'nodemailer-smtp-transport';

const transporter = nodemailer.createTransport(
  smtp({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: { user: process.env.MAILER_USER, pass: process.env.MAILER_PASSWORD },
  })
);



export const mailer = (subject, body) => {
  transporter.sendMail(
    {
      from: process.env.MAILER_USER,
      to: process.env.MAILER_TO,
      subject: subject,
      html: body,
    },
    (error) => {
      if (error) {
        console.log(error);
      }
    }
  );
};
