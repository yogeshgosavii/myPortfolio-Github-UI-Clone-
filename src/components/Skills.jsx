// components/Skills.js

import React from 'react';

const Skills = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <ul className="list-disc pl-8">
        <li>Java, C++, Spring Boot, Servlets, MySQL, Firebase, Android Studio, Eclipse</li>
        <li>Thymeleaf, Javascript, Node.js, Express.js, React, Tailwind</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Languages</h2>
      <ul className="list-disc pl-8">
        <li>English</li>
        <li>Marathi</li>
        <li>Hindi</li>
      </ul>
    </div>
  );
}

export default Skills;
