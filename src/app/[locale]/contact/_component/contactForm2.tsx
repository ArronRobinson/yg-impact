"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  // Type the event parameter correctly
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to an API
    console.log('Form data submitted:', formData);
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
          Submit
        </button>
      </div>
    </form>
  );
}