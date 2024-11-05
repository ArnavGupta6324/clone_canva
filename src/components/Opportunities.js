import React from 'react';
import './Opportunities.css';


function Opportunities() {
  const opportunities = [
    {
      title: "Advaita-2024",
      type: "Festival",
      participants: "14,292 Registered",
      daysLeft: "12 Competitions",
      image: "/bussiness.png"



    },
    {
      title: "PhD Sponsorships, Cash Rewards & Internships",
      type: "Online | Free",
      participants: "2,491 Registered",
      daysLeft: "29 days left",
       image: "/phd.png"
    },
    {
      title: "The Ultimate Pitch",
      type: "Online | Free",
      participants: "4,733 Registered",
      daysLeft: "19 days left",
       image: "/ultimate.png"
    },
    {
      title: "Luminous Techno-X",
      type: "Online | Free",
      participants: "55,002 Registered",
      daysLeft: "4 days left",
       image: "/techno.png"
    },
  ];

  return (
    <section className="opportunities-section">
      {/* Featured Opportunities */}
      <div className="opportunity-group">
        <h2>Featured Opportunities</h2>
        <p>Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className="opportunity-cards">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="card">
              <img src={opportunity.image} alt={opportunity.title} className="opportunity-image" />
              <h3>{opportunity.title}</h3>
              <p className="type">{opportunity.type}</p>
              <p className="participants">{opportunity.participants}</p>
              <p className="days-left">{opportunity.daysLeft}</p>
              <button className="register-button">Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Project-Based Internships under Faculties */}
      <div className="opportunity-group">
        <h2>Project – Based Internships under Faculties</h2>
        <p>Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className="opportunity-cards">
          {opportunities.map((opportunity, index) => 
           (
            <div key={index} className="card">
                 <img src={opportunity.image} alt={opportunity.title} className="opportunity-image" />
              <h3>{opportunity.title}</h3>
              <p className="type">{opportunity.type}</p>
              <p className="participants">{opportunity.participants}</p>
              <p className="days-left">{opportunity.daysLeft}</p>
              <button className="register-button">Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Internships under IIT/IIM & Foreign Faculties */}
      <div className="opportunity-group">
        <h2>Internships under IIT/IIM & Foreign Faculties</h2>
        <p>Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className="opportunity-cards">
    
          {opportunities.map((opportunity, index) =>   (

            <div key={index} className="card">
                 <img src={opportunity.image} alt={opportunity.title} className="opportunity-image" />
              <h3>{opportunity.title}</h3>
              <p className="type">{opportunity.type}</p>
              <p className="participants">{opportunity.participants}</p>
              <p className="days-left">{opportunity.daysLeft}</p>
              <button className="register-button">Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections under IIT/IIM & Foreign Faculties */}
      <div className="opportunity-group">
        <h2>Additional Internships under IIT/IIM & Foreign Faculties</h2>
        <p>Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className="opportunity-cards">
          {opportunities.map((opportunity, index) => 
           (
            <div key={index} className="card">
                 <img src={opportunity.image} alt={opportunity.title} className="opportunity-image" />
              <h3>{opportunity.title}</h3>
              <p className="type">{opportunity.type}</p>
              <p className="participants">{opportunity.participants}</p>
              <p className="days-left">{opportunity.daysLeft}</p>
              <button className="register-button">Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Learn a New Skill Section */}
<div className="opportunity-group">
  <h2>Learn a new Skill and be job-ready</h2>
  <p>Start or switch your career by upskilling with job-ready skills.</p>
  <div className="opportunity-cards">
    <div className="card">
    <img src="/aiml.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Learn AI/ML</h3>
      <p className="type">13k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
    <div className="card">
    <img src="/cs.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Cyber Security</h3>
      <p className="type">17k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
    <div className="card">
    <img src="/da.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Data Analytics</h3>
      <p className="type">10k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
    <div className="card">
    <img src="/aws.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>AWS</h3>
      <p className="type">6k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
  </div>
</div>

{/* Take Guidance from Top Mentors Section */}
<div className="opportunity-group">
  <h2>Take Guidance from Top Mentors</h2>
  <p>In search of excellence? Explore the highest-rated mentors as recognized by the learner community.</p>
  <div className="opportunity-cards">
    <div className="card mentor-card">
    <img src="/sk.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Shubham Kumar</h3>
      <p className="type">Top Unstoppable Mentor 2024</p>
      <button className="view-profile-button">View Profile</button>
    </div>
    <div className="card mentor-card">
    <img src="/pg.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Pooja Gera</h3>
      <p className="type">Software Engineer</p>
      <button className="view-profile-button">View Profile</button>
    </div>
    <div className="card mentor-card">
    <img src="/vs.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>V S Sasi Kumar</h3>
      <p className="type">Data Scientist at Cognizant</p>
      <button className="view-profile-button">View Profile</button>
    </div>
    <div className="card mentor-card">
    <img src="/sg.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Shivam Garg</h3>
      <p className="type">JP Morgan Chase</p>
      <button className="view-profile-button">View Profile</button>
    </div>
  </div>
</div>
<img src="/cv-evaluation.png" alt="CV Evaluation" className="cv-evaluation-image" />
{/* Learn a New Skill Section */}
<div className="opportunity-group">
  <h2>Testimonials</h2>
  <p>Start or switch your career by upskilling with job ready-skills.</p>
  <div className="opportunity-cards">
    <div className="card">
    <img src="/aiml.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Learn AI/ML</h3>
      <p className="type">13k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
    <div className="card">
    <img src="/cs.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Cyber Security</h3>
      <p className="type">17k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
    <div className="card">
    <img src="/da.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>Data Analytics</h3>
      <p className="type">10k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
    <div className="card">
    <img src="/aws.png" alt="Learn AI/ML" className="opportunity-image" />

      <h3>AWS</h3>
      <p className="type">6k Lessons</p>
      <button className="view-course-button">View Course</button>
    </div>
  </div>
</div>

{/* Community Join Section */}
<div className="community-join">
  <img src="/react.png" alt="Avatar Group" className="avatar-group" />
  <h2>You are not alone in this journey</h2>
  <p>Meet 30,000+ aspirants and access handwritten notes, mind-maps, and practice with Daily Targets</p>
  <button className="join-community-button">Join community 🚀</button>
  </div>
 


    </section>
  );
}

export default Opportunities;
