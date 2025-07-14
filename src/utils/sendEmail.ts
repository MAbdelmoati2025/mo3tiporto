import { receiver_email } from "../../public/data/contact";

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = values;

  return await fetch("https://email-sender-zhby.vercel.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
      receiver_email,
    }),
  });
};
