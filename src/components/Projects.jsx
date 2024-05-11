// components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Library Setup</h3>
        <p>A website to create a custom library setup and track the books, students, and borrowed books.</p>
        <p><strong>Tech Stack:</strong> Java, Spring Boot, Maven, Hibernate, Thymeleaf, React, TailWind, MySQL, Intellij IDEA</p>
        <p><strong>Date:</strong> Jan 2024</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Blogger</h3>
        <p>A blogging website where you can post photos and your thoughts. Helps connect people online.</p>
        <p><strong>Tech Stack:</strong> Tailwind, Javascript, React.js, Node.js, Express.js, MySQL</p>
        <p><strong>Date:</strong> June 2023</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Green Circuit</h3>
        <p>A website to manage e-waste from user to e-waste organisation. For the e-waste centre, it manages the user's request for dumping e-waste. For users, it lists the e-waste centre near the user so the user can send a request.</p>
        <p><strong>Tech Stack:</strong> Java, Spring Boot, Maven, Hibernate, MongoDB</p>
        <p><strong>Date:</strong> Nov 2023</p>
      </div>
    </div>
  );
}

export default Projects;
