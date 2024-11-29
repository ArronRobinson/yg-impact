"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

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
      alert("Invalid email address. Please try again."); // Alert instead of toast
      return;
    }

    const templateParams = {
      from_name: formData.fullName, // Corresponds to {{from_name}}
      from_email: formData.email, // Corresponds to {{from_email}}
      message: formData.message, // Corresponds to {{message}}
      to_name: "Ylenia", // Corresponds to {{to_name}}
    };

    emailjs
      .send(
        "service_uu1i67a", // Service ID from EmailJS dashboard
        "template_38x5wbe", // Template ID from EmailJS dashboard
        templateParams,
        "DWCFF62dyVvYNtsW1" // User ID from EmailJS dashboard
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Your message has been sent successfully!"); // Alert instead of toast
          setFormData({ fullName: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.log("Email sending failed:", error);
          alert("There was an error sending your message. Please try again."); // Alert instead of toast
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
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-2 border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-gray-500 w-full sm:w-1/2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-gray-500 w-full sm:w-1/2"
          required
        />
      </div>

      {/* Message field */}
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="p-2 border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-gray-500 w-full"
        rows={5}
        required
      />

      <div>
        <button
          type="submit"
          className="px-6 py-2 border border-black text-black rounded-full hover:bg-gray-100"
        >
          Versturen
        </button>
      </div>
    </form>
  );
}