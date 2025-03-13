// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (to avoid "Cannot POST /" error)

    // You can send the data to your server or a third-party API here
    console.log('Form submitted', formData);
    
    // Example: Call an API to send form data (or handle it locally)
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    // .then(response => response.json())
    // .then(data => console.log('Form response:', data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
