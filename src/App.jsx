import React,{ useState } from 'react';
// import { ArrowUpRight, Mail, Linkedin, Github, FileText, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { ArrowUpRight, Mail, Linkedin, Github, FileText, Sparkles, Briefcase, GraduationCap, X, ExternalLink } from 'lucide-react';
import './App.css';
import avatarImage from './assets/avatar.png';
import financedashboard from './assets/financedashboard.png';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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
      id: 1,
      title: "Full-Stack Financial Dashboard App",
      category: "Dev",
      shortDescription: "A full-stack web application that allows users to track and manage their personal finances through an intuitive dashboard interface.",
      image: financedashboard,
      link: "https://financedashboard-28qf2z7y2-prisha-vs-projects.vercel.app/",
      color: "rose",
      fullDescription: `A full-stack personal finance platform built using a microservices architecture 
      with four independently deployed Python Flask services: 
      authentication, net balance computation, notifications, and 
      savings progress tracking. The backend is composed of 
      RESTful Flask APIs deployed on Render, while the frontend is a lightweight,
       React-style interface deployed on Vercel using vanilla JavaScript, LocalStorage 
       for client-side state, and asynchronous fetch calls for API communication. 
       Each microservice has its own CORS configuration, enabling cross-origin communication 
       across the distributed system. The project emphasizes human-centered design, clean 
       separation of responsibilities, error handling with fallback logic, and real-time 
       synchronization between services. This application’s frontend was implemented using 
       pure JavaScript, manually handling client-side state, DOM rendering, and asynchronous 
       API workflows typically abstracted by tools like React or Vue.`,
      problemStatement: "Young professionals struggle to get a quick overview of their financial health, often spending 10+ minutes checking multiple apps and spreadsheets daily.",
    
      targetUser: "Young professionals (ages 22-35) managing their first salary who want simple financial visibility without complexity",
    
     userNeeds: [
      "See financial health at a glance in under 30 seconds",
      "Track spending without manual categorization",
      "Privacy-first solution (no sharing bank credentials)"
     ],
    
     productGoals: [
      "Reduce time to financial overview from 5+ minutes to under 30 seconds",
      "Enable users to identify spending patterns within first week",
      "Maintain 70%+ weekly active user rate"
      ],
    
     keyDecisions: [
      {
        decision: "Local-first storage vs cloud sync",
        rationale: "User interviews revealed privacy as top concern. Local storage eliminated authentication friction and increased trust.",
        tradeoff: "No multi-device sync in MVP, but aligned with single-device usage pattern observed in research"
      }
    ],
    
      metrics: [
      { metric: "Time to View Dashboard", result: "Average 15 seconds (70% improvement)" },
      { metric: "Feature Adoption", result: "Budget tracking used by 67% of users" }
    ],
    
      iterations: "Simplified from multi-page to single dashboard after testing showed users found navigation frustrating. Single-page increased task completion by 35%.",
    
      learnings: "Technical elegance doesn't matter if users can't accomplish goals quickly. Regular user testing prevented over-engineering.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT Authentication"],
      features: [
        "Real-time expense tracking and categorization",
        "Interactive data visualizations with Chart.js",
        "Secure user authentication with JWT",
        "CRUD operations for transactions and budgets",
        "Responsive design for mobile and desktop",
        "RESTful API architecture"
      ],
      challenges: "Implementing secure authentication and ensuring data consistency across the application while maintaining performance.",
      learnings: "Gained deep understanding of full-stack development, API design, and state management in React applications."
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
            {/* <Sparkles size={16} /> */}
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
              Hello! I'm a third-year student at Oregon State University majoring in Computer Science with a minor in Business.
            </p>
            <p className="about-text">
             I’m passionate about blending data-driven insights and creative problem solving 
             to build products that make an impact. I love digging into problems, uncovering user insights, and working 
             with technical teams to bring ideas from concept to launch. So much so that I even
             founded my university's first Product Management Club to build a community around
             product thinking!
             With a foundation in software development and a curiosity for how great products are made, 
             product management is the place where my technical mindset, creativity, and leadership come together.
            </p>
            <p className="about-text">
              When I'm not thinking about products, you can find me attempting the technical bake challenges
              from The Great British Bake Off or annoying my dog!
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
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="project-card"
          onClick={() => setSelectedProject(project)}
        >
          <div className="project-image-container">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
            />
          </div>
          <div className="project-content">
            <div className="project-header">
              <span className={`project-tag ${project.category.toLowerCase()}`}>
                {project.category}
              </span>
              <ArrowUpRight size={20} className="project-arrow" />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-short-description">{project.shortDescription}</p>
          </div>
        </div>
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

       {/* Modal Code */}
       
{selectedProject && (
  <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-close">
        <button className="close-btn" onClick={() => setSelectedProject(null)}>
          <X size={20} />
        </button>
      </div>
      
      <div className="modal-hero">
        <img src={selectedProject.image} alt={selectedProject.title} />
      </div>

      <div className="modal-body">
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <span className={`project-tag ${selectedProject.category.toLowerCase()}`}>
              {selectedProject.category}
            </span>
          </div>
          <div className="modal-links">
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="link-btn">
              <ExternalLink size={16} />
              View Live
            </a>
          </div>
        </div>

        {/* PM SECTION 1: Problem Statement */}
        {selectedProject.problemStatement && (
          <div className="modal-section">
            <h3 className="modal-section-title">Problem & Opportunity</h3>
            <div className="highlight-box">
              <p className="modal-text">{selectedProject.problemStatement}</p>
            </div>
          </div>
        )}

        {/* PM SECTION 2: Target User & Needs */}
        {selectedProject.targetUser && (
          <div className="modal-section">
            <h3 className="modal-section-title">Target User & Needs</h3>
            <p className="modal-text"><strong>Target User:</strong> {selectedProject.targetUser}</p>
            {selectedProject.userNeeds && selectedProject.userNeeds.length > 0 && (
              <ul className="feature-list">
                {selectedProject.userNeeds.map((need, i) => (
                  <li key={i}>{need}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* PM SECTION 3: Product Goals */}
        {selectedProject.productGoals && selectedProject.productGoals.length > 0 && (
          <div className="modal-section">
            <h3 className="modal-section-title">Product Goals</h3>
            <ul className="feature-list">
              {selectedProject.productGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PM SECTION 4: Key Decisions */}
        {selectedProject.keyDecisions && selectedProject.keyDecisions.length > 0 && (
          <div className="modal-section">
            <h3 className="modal-section-title">Key Product Decisions</h3>
            {selectedProject.keyDecisions.map((item, i) => (
              <div key={i} className="decision-card">
                <div className="decision-title">{item.decision}</div>
                <div className="decision-label">Rationale</div>
                <div className="decision-content">{item.rationale}</div>
                <div className="decision-label">Tradeoff</div>
                <div className="decision-content">{item.tradeoff}</div>
              </div>
            ))}
          </div>
        )}

        {/* PM SECTION 5: Metrics & Impact */}
        {selectedProject.metrics && selectedProject.metrics.length > 0 && (
          <div className="modal-section">
            <h3 className="modal-section-title">Metrics & Impact</h3>
            <div className="metrics-grid">
              {selectedProject.metrics.map((item, i) => (
                <div key={i} className="metric-card">
                  <div className="metric-label">{item.metric}</div>
                  <div className="metric-value">{item.result}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECHNICAL SECTION: Overview */}
        <div className="modal-section">
          <h3 className="modal-section-title">Technical Implementation</h3>
          <p className="modal-text">{selectedProject.fullDescription}</p>
        </div>

        {/* Technologies */}
        <div className="modal-section">
          <h3 className="modal-section-title">Technologies Used</h3>
          <div className="tech-grid">
            {selectedProject.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="modal-section">
          <h3 className="modal-section-title">Key Features</h3>
          <ul className="feature-list">
            {selectedProject.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* PM SECTION 6: Iterations */}
        {selectedProject.iterations && (
          <div className="modal-section">
            <h3 className="modal-section-title">Iterations & Learnings</h3>
            <div className="highlight-box">
              <p className="modal-text"><strong>Iterations:</strong> {selectedProject.iterations}</p>
            </div>
          </div>
        )}

        {/* Challenges & Learnings */}
        <div className="modal-section">
          <h3 className="modal-section-title">Challenges & Solutions</h3>
          <p className="modal-text">{selectedProject.challenges}</p>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Key Learnings</h3>
          <p className="modal-text">{selectedProject.learnings}</p>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
export default App;