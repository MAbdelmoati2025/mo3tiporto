import { receiver_email } from "../../public/data/contact";

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = values;

  return await fetch("email-sender-lnormrccj-mabdelmoati2025s-projects.vercel.app", {
    method: "POST",
    headers: { "Content-Type": "applicatidon/json" },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
      receiver_email,
    }),
  });
};
