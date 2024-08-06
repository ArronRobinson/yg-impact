"use server"

import { contactSchema } from "@/app/[locale]/contact/_component/contactForm";
import { transporter } from "@/utils/nodemailer";
import { z } from "zod";

export async function sendEmail(values: z.infer<typeof contactSchema>){
    // send mail with defined transport object
  const info = await transporter.sendMail({
    // from: '"Maddison Foo Koch 👻" <adaline.klocko42@ethereal.email>', // sender address
    from: {
        name: `${values.fullName}`,
        address: values.email
    },
    to: "adaline.klocko42@ethereal.email", // list of receivers
    subject: "Contact Form", // Subject line
    text: values.message, // plain text body
    html: `<b>${values.message}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}