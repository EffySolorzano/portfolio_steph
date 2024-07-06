import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a hidden form to submit to Formspree
    const form = document.createElement('form');
    form.action = 'https://formspree.io/f/xjkbvpgw';
    form.method = 'POST';
    form.style.display = 'none';

    // Add form data
    Object.keys(formData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = formData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message sent successfully!",
      showConfirmButton: false,
      timer: 1500
    });

    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative overflow-hidden">
        <div className="gradient-circle absolute top-0 left-0 w-full h-24 z-0"></div>
        <div className="gradient-circle-bottom absolute bottom-0 left-0 w-full h-24 z-0"></div>
        <button
          className="absolute top-2 right-2 text-gray-700 z-10"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative z-10">
          <img src="/totoro.png" alt="Contact Form Image" className="mx-auto mb-4 w-20 h-20" />
          <h1 className="text-center text-gray-700 text-2xl mb-4">Let&apos;s talk</h1> 
        </div>
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            />
          </div>
          <div className="relative">
            <div className="flex items-center justify-center relative z-10 mb-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Done!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
