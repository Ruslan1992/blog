import { mailer } from 'lib/mailer';
import { MailTemplate } from 'lib/mailTemplate';

export default async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const body = MailTemplate(name, email, message);
    await mailer(subject, body);
    return res
      .status(200)
      .json({ sendmessage: true });
  } catch (e) {
    console.log(e);
  }
};
