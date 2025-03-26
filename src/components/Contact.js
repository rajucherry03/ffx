import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit the form. Please try again.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-dark-blue">Contact Us</h2>
        {submitted ? (
          <p className="text-cyan-accent mb-6">Thank you for your message! We’ll get back to you soon.</p>
        ) : error ? (
          <p className="text-red-500 mb-6">{error}</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg text-dark-blue border border-gray-300 focus:border-cyan-accent focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg text-dark-blue border border-gray-300 focus:border-cyan-accent focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg text-dark-blue border border-gray-300 focus:border-cyan-accent focus:outline-none h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-accent to-purple-accent text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;