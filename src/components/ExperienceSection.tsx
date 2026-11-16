import React from "react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  duties: React.ReactNode[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Avanza Solutions",
    location: "Karachi, Pakistan",
    period: "May 2024 — Present",
    description:
      "Integrating enterprise CRM software for Faysal Bank Limited on high-throughput Java REST API microservice architecture and dynamic frontend systems.",
    duties: [
      <>
        <strong>Banking CRM &amp; Architecture:</strong> Coordinated with the bank to facilitate seamless CRM software implementation on a resilient Java REST API microservice architecture.
      </>,
      <>
        <strong>Dynamic Frontend Engineering:</strong> Engaged in enhancing core project modules by architecting and developing dynamic, component-driven frontend architecture in React.js.
      </>,
      <>
        <strong>Workflow Automation:</strong> Created and enhanced complex complaint and service request workflows using dynamic programming techniques and streamlined business logic.
      </>,
    ],
    techStack: ["Java", "Spring Boot", "REST APIs", "Microservices", "React.js", "Dynamic Forms", "Banking CRM"],
  },
  {
    role: "Senior Software Engineer",
    company: "JS Bank",
    location: "Karachi, Pakistan",
    period: "Feb 2023 — Apr 2024",
    description:
      "Driving innovative banking solutions with cutting-edge technology at JS Bank across enterprise onboarding, microservices, and security infrastructure.",
    duties: [
      <>
        <strong>Enterprise Project Management:</strong> Successfully managed multiple projects, leveraging diverse technologies including Node REST APIs, Kafka, ELK, Winston Logger, &amp; databases like Oracle and MongoDB for optimal system performance.
      </>,
      <>
        <strong>Software Engineering &amp; Modernization:</strong> Engineered onboarding software using Spring Boot and React, focusing on effective state management and led the modernization of legacy digital products utilizing Java Servlet and JSP.
      </>,
      <>
        <strong>Security &amp; Integrity:</strong> Enhanced application security by implementing robust security algorithms to protect against payload manipulation and unauthorized data modification.
      </>,
      <>
        <strong>Collaborative Git Workflows:</strong> Employed Git for comprehensive version control, promoting collaborative and organized code management through effective branching strategies and merge workflows.
      </>,
      <>
        <strong>Agile Delivery:</strong> Adopted Agile methodology to facilitate rapid and seamless development, ensuring timely and efficient deployment of project updates.
      </>,
    ],
    techStack: ["Spring Boot", "React", "Kafka", "Node.js REST APIs", "Oracle", "MongoDB", "ELK", "Java Servlet", "JSP", "Git"],
  },
  {
    role: "Senior Software Engineer / Software Engineer",
    company: "Teresol Pvt Ltd",
    location: "Karachi, Pakistan",
    period: "Sep 2021 — Jan 2023",
    description:
      "Empowering digital transformation with creative and efficient tech strategies across micro frontends and component-driven architecture.",
    duties: [
      <>
        <strong>Micro Frontends &amp; Docker:</strong> Managed and contributed to component development, state management through Vuex, and micro frontend deployment through Docker at the harbor.
      </>,
      <>
        <strong>Finite State Modeling:</strong> Implemented a state management system using the xState library, effectively handling all use cases and maintaining complex application states.
      </>,
      <>
        <strong>Framework Integration:</strong> Orchestrated the integration of the Vue.js-based frontend application with high-performance REST APIs developed in the Quarkus framework.
      </>,
      <>
        <strong>Business Analysis &amp; Validation:</strong> Collaborated closely with Business Analysts and validation teams to meticulously gather and comprehend intricate business logic and system requirements.
      </>,
      <>
        <strong>Version Control:</strong> Utilized Git for version control, ensuring efficient collaboration, code traceability, and streamlined project management with structured branching strategies.
      </>,
    ],
    techStack: ["Vue.js", "Vuex", "xState", "Quarkus", "Micro Frontends", "Docker", "Harbor", "REST APIs", "Git"],
  },
  {
    role: "Software Developer",
    company: "Bank AL Habib Ltd",
    location: "Karachi, Pakistan",
    period: "Oct 2020 — Aug 2021",
    description:
      "Shaping the future of finance with progressive banking solutions, core financial portal engineering, and high-volume utility reporting.",
    duties: [
      <>
        <strong>Roshan Digital Account Portal:</strong> Developed the Roshan Digital Account portal for the back office, incorporating advanced audit trail management with multiple approval levels using .Net MVC5.
      </>,
      <>
        <strong>Financial Calculator API:</strong> Created the Roshan Apni Car Installment calculator REST API for precise multi-term financing simulations.
      </>,
      <>
        <strong>Corporate File Management:</strong> Designed and managed a daily File Management Application for corporate utility partners including KE and LESCO, facilitating daily reporting and reconciliation.
      </>,
      <>
        <strong>Source Control:</strong> Proficiently utilized SVN (Subversion) and Team Foundation Server (TFS) for collaborative corporate software delivery.
      </>,
    ],
    techStack: [".Net MVC5", ".Net Core", "C#", "REST API", "SQL", "SVN", "TFS"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-briefcase"></i> Career Path
          </span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Track record of technical leadership, measurable impact, and scaling software solutions.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <i className="fas fa-building"></i> {exp.company}{" "}
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>
                        • {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="timeline-period-badge">
                    <i className="far fa-calendar-alt"></i> {exp.period}
                  </span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-duties">
                  {exp.duties.map((duty, dIdx) => (
                    <li key={dIdx}>{duty}</li>
                  ))}
                </ul>
                <div className="timeline-tech-stack">
                  {exp.techStack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
