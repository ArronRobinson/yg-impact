"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast"
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const t = useTranslations("contact");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
      to_name: "Ylenia",
    };

    // Show loading toast
    toast({
      title: String(t("sending")),
      description: String(t("sendingdis")),
    });

    emailjs
      .send(
        "service_uu1i67a",
        "template_38x5wbe",
        templateParams,
        "DWCFF62dyVvYNtsW1"
      )
      .then(
        (response) => {
          toast({
            title: String(t("sent")),
            description: String(t("sentdis")),
            variant: "default",
          });
          
          // Clear the form
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: "There was an error sending your message. Please try again.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Full Name and Email side by side */}
      <div className="flex space-x-4">
        <input
          type="text"
          name="fullName"
          placeholder={t("name")}
          value={formData.fullName}
          onChange={handleChange}
          className="p-2 border-b border-opacity-30 border-black rounded-none focus:outline-none focus:border-b-2 focus:border-gray-500 w-full w-1/2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border-b border-opacity-30 border-black rounded-none focus:outline-none focus:border-b-2 focus:border-gray-500 w-full w-1/2"
          required
        />
      </div>

      {/* Message field */}
      <textarea
        name="message"
        placeholder={t("message")}
        value={formData.message}
        onChange={handleChange}
        className="p-2 border-b border-opacity-30 border-black rounded-none focus:outline-none focus:border-b-2 focus:border-gray-500 w-full"
        rows={5}
        required
      />

      <div>
        <button
          type="submit"
          className="px-6 py-2 border border-opacity-30 border-black text-black rounded-full hover:bg-gray-100"
        >
          {t("submit")}
        </button>
      </div>
    </form>
  );
}