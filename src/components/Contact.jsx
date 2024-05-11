// components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <ul className="list-disc pl-8">
        <li><strong>Location:</strong> Mumbai, India</li>
        <li><strong>Email:</strong> yogeshgosavif8@gmail.com</li>
        <li><strong>Phone:</strong> 9967223074</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yogeshgosavi-202704256" className="text-blue-500">linkedin.com/in/yogeshgosavi-202704256</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/yogeshgosavii" className="text-blue-500">github.com/yogeshgosavii</a></li>
      </ul>
    </div>
  );
}

export default Contact;
