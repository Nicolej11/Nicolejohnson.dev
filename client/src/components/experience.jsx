import React from 'react';
import './experience.css'; 

const experiences = [
    {
      company: "Byte Strategy",
      role: "Data Analyst and AI Strategist Consultant",
      duration: "December 2024 - Present",
      description: [
        "Collaborate in an Agile environment with the Chief Strategy Officer to implement AI solutions, workflow automations, and API integrations that reduce client processing time.",
        "Create business process documentation tailored to client use cases.",
        "Analyze and visualize data insights using supervised learning metrics and Python libraries such as Scikit-Learn."
      ],
      website: "https://bytestrategy.ai/", // Added link here
    },
    {
      company: "Florida State University",
      role: "Programming 1 Learning Assistant",
      duration: "August 2024 - May 2025",
      description: [
        "Facilitated weekly recitation sessions for over 200 students, contributing to a 15%+ increase in course pass rates through hands-on coding guidance.",
        "Offered individualized coding support, including debugging and C++ best practices.",
        "Communicated technical information in a comprehensible manner to students who had never been exposed to programming before."
      ],
    },
  ];
  
  const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            {/* Render the company name as a link if it exists */}
            <h3>
              {exp.website ? (
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <ul className="description">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
  
  export default Experience;