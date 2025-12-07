import React from 'react';
import { ArrowUpRight, Mail, Linkedin, Github, FileText, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import './App.css';
import avatarImage from './assets/avatar.png';

function App() {
  const experiences = [
    {
      role: "Founder and President",
      company: "Product Management Club @ OSU",
      period: "June 2025  - Present",
      description: 
      <ul className='bullet-list'>
        <li>Leading Oregon State University’s first Product Management Club, defining the club’s structure and programming
                      roadmap while cultivating a cross-functional product community through strategic partnerships, industry outreach,
                      and thoughtful leadership.</li>
                    
        <li>Oversee internal club software projects through the product lifecycle by defining problems, leading cross-disciplinary
                      teams, and driving measurable outcomes while mentoring members in product management principles.</li>
                      
        <li>Represent the organization publicly by moderating high-impact panels, speaker events, and workshops,
                      strengthening the club’s visibility and industry relationships.</li>
                      
        <li>Launched initiatives such as Engineering Capstone Integration Workshops in university capstone classes, connecting
                      students with real-world PM frameworks for their senior capstone projects.</li>
      </ul>,
      tags: ["Cross-Functional Leadership", "Product Roadmapping", "User Research", "Communication & Public Speaking", "Product Lifecylce Management", "Collaboration"]
    },

    {
      role: "HCI Research Lab Intern",
      company: "Oregon State University",
      period: "Sept 2023 - May 2025",
      description: 
       <ul className='bullet-list'>
        <li>Researched demographic disparities and algorithmic biases in AI, generating actionable insights to create inclusive
        user experiences.</li>
                      
        <li>Analyzed datasets using R and Excel to evaluate user data and identify inclusivity bugs in software.</li>
                      
        <li>Co-authored peer-reviewed technical publications in the field of HCI to communicate findings to both technical and
        non-technical audiences.</li>

      </ul>,
       tags: ["Empirical Research", "Technical Writing", "User Experience Research", "Data Analysis"]
    },

    {
      role: "Product and Data Analyst Intern",
      company: "AR Rahman Studios",
      period: "July 2022 - Nov 2022",
      description: 
       <ul className='bullet-list'>
        <li>Assisted in the development of the Le Musk VR project, the world’s first virtual reality film with olfactory
        elements.</li>
                      
        <li>Supported the development of the Le Musk VR project by collecting and analyzing user and technical data to
        inform project decisions and optimize viewer experience.</li>
                      
        <li>Coordinated cross-functional activities, including MPAA reporting, film promotion, and technical activation of
        premiere events.</li>

        <li>Monitored post-launch performance and user engagement, using insights to inform product improvements and
        future VR initiatives.</li>

      </ul>,
       tags: ["Product Development", "Technical Operations", "Post-Launch Analysis", "User Experience Optimization", "Media Production"]
    }
  ];

  const projects = [
    {
      title: "Project Name",
      category: "fill this",
      description: "fill this",
      link: "#",
      color: "rose"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
        <img src={avatarImage} alt="Prisha" className="hero-avatar-nav"/>
          {/* <div className="nav-logo">Prisha Velhal</div> */}
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Prisha Velhal</span>
            </h1>
              <img src={avatarImage} alt="Prisha" className="hero-avatar"/>
          </div>
          <p className="hero-description">
            Aspiring Product Manager passionate about creating user-centered solutions. 
            Currently studying Computer Science with a minor in Business at Oregon State University and seeking opportunities to learn and grow in product.
          </p>
          
          <div className="badge">
            <Sparkles size={16} />
            <span>Open to PM Internships Summer 2025</span>
          </div>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              View My Work
            </a>
            <a href="resume.pdf" className="btn btn-secondary">
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p className="about-text">
              Hello! I'm a third-year student at Oregon State University majoring in Computer Science with a minor in Business. Add more to this.
            </p>
            <p className="about-text">
              I love the intersection of user empathy, data-driven decision making, and creative 
              problem solving. When I'm not thinking about products, you can find me cooking up a storm in the kitchen or annoying my dog!
            </p>
            
            <div className="about-education">
              <GraduationCap size={18} />
              <span>Oregon State University• Expected Graduation: June 2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                className="project-card"
              >
                <div className="project-header">
                  <div className={`project-icon project-icon-${project.color}`}>
                    <Briefcase size={20} />
                  </div>
                  <ArrowUpRight size={20} className="project-arrow" />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-card">
            <h2 className="contact-title">Let's Connect!</h2>
            <p className="contact-description">
              I'd love to chat about product, internships, or just connect. 
              Feel free to reach out!
            </p>
            
            <div className="contact-links">
              <a href="mailto:prisha.velhal@gmail.com" className="contact-btn">
                <Mail size={18} />
                Email
              </a>
              <a href="https://linkedin.com/in/prishavelhal" className="contact-btn">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="https://github.com/prishavelhal" className="contact-btn">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Prisha Velhal © 2025</p>
      </footer>
    </div>
  );
}

export default App;