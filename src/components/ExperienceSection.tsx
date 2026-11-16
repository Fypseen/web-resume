"use client";

import React, { useState } from "react";

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
    company: "Avanza Solutions Pvt Ltd",
    location: "Karachi, Pakistan",
    period: "May, 2024 — Present",
    description:
      "Integrating enterprise CRM software for Faysal Bank Limited, driving Java REST API microservice efficiency and managing mission-critical deployments.",
    duties: [
      <>
        <strong>Enterprise CRM Integration:</strong> Led the integration of CRM software for Faysal Bank Limited, implementing Java REST API microservices architecture to enhance system efficiency.
      </>,
      <>
        <strong>End-to-End Deployments:</strong> Managed end-to-end deployments, troubleshooting integration issues, API failures, and system bugs, ensuring minimal downtime and smooth functionality.
      </>,
      <>
        <strong>Stakeholder Collaboration:</strong> Collaborated with cross-functional teams, including banking stakeholders and developers, to implement scalable enhancements and resolve real-time operational challenges.
      </>,
    ],
    techStack: ["Java", "Spring Boot", "REST APIs", "Microservices", "React.js", "CRM Integration"],
  },
  {
    role: "Senior Software Engineer",
    company: "JS Bank Limited",
    location: "Karachi, Pakistan",
    period: "Feb, 2023 — May, 2024",
    description:
      "Optimizing system performance and leading the modernization of legacy banking systems to reactive microservices architectures.",
    duties: [
      <>
        <strong>Performance &amp; Observability:</strong> Optimized system performance by integrating Kafka, ELK stack, and Winston Logger, enhancing real-time data processing, log management, and system reliability.
      </>,
      <>
        <strong>System Modernization:</strong> Led the modernization of legacy banking systems, migrating applications from Java Servlet and JSP to a microservices architecture using Spring Boot, React.js, and Node.js REST APIs.
      </>,
      <>
        <strong>Application Security:</strong> Strengthened application security by implementing robust security algorithms, mitigating risks related to payload manipulation and unauthorized access.
      </>,
      <>
        <strong>CI/CD &amp; Git Automation:</strong> Optimized deployment workflows using Git version control, employing effective branching strategies, merge workflows, and CI/CD automation to enhance collaborative development and code management.
      </>,
    ],
    techStack: ["Spring Boot", "React.js", "Kafka", "Node.js REST APIs", "Oracle", "MongoDB", "ELK", "Java Servlet", "JSP", "Git", "CI/CD"],
  },
  {
    role: "Senior Software Engineer",
    company: "Teresol Pvt Ltd",
    location: "Karachi, Pakistan",
    period: "Sep, 2021 — Jan, 2023",
    description:
      "Developing and deploying modular micro frontend architectures and optimizing full-stack integration across enterprise software.",
    duties: [
      <>
        <strong>Micro Frontends &amp; Containerization:</strong> Developed and deployed micro frontend architectures, leveraging Vue.js, Docker, and state management tools like Vuex and xState to enhance modularity and scalability.
      </>,
      <>
        <strong>API Performance Optimization:</strong> Orchestrated seamless frontend-backend integration, optimizing REST API calls via Quarkus to ensure high performance.
      </>,
      <>
        <strong>Business Analysis Translation:</strong> Collaborated with business analysts and validation teams, translating complex business logic and system requirements into functional solutions.
      </>,
      <>
        <strong>Deployment Pipeline Optimization:</strong> Optimized software deployment pipelines, improving Git workflows, CI/CD automation, and code review processes for faster, more efficient releases.
      </>,
    ],
    techStack: ["Vue.js", "Vuex", "xState", "Quarkus", "Micro Frontends", "Docker", "GitLab", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "Bank AL Habib Limited",
    location: "Karachi, Pakistan",
    period: "Oct, 2020 — Aug, 2021",
    description:
      "Developing digital banking portals, financial installment calculator APIs, and corporate file management systems.",
    duties: [
      <>
        <strong>RDA Portal Development:</strong> Developed and maintained the RDA portal, implementing .NET MVC5 to streamline digital banking operations.
      </>,
      <>
        <strong>Financial Calculator API:</strong> Designed and deployed REST APIs for the Roshan Apni Car Installment Calculator, enabling accurate financial calculations for customer loan applications.
      </>,
      <>
        <strong>File Management Automation:</strong> Built a File Management System for financial institutions, automating daily reporting and reconciliation processes.
      </>,
    ],
    techStack: [".NET MVC5", ".NET Core", "C#", "REST API", "SQL", "SVN", "TFS"],
  },
];

export default function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

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
          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedItems[idx];
            return (
              <div className="timeline-item" key={idx}>
                <div className="timeline-marker"></div>
                <div className={`timeline-card ${isExpanded ? "expanded" : ""}`}>
                  <div
                    className="timeline-header clickable"
                    onClick={() => toggleExpand(idx)}
                    title={isExpanded ? "Click to collapse" : "Click to expand details"}
                  >
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <div className="timeline-company">
                        <i className="fas fa-building"></i> {exp.company}{" "}
                        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "normal" }}>
                          • {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="timeline-header-right">
                      <span className="timeline-period-badge">
                        <i className="far fa-calendar-alt"></i> {exp.period}
                      </span>
                      <button
                        type="button"
                        className="timeline-expand-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(idx);
                        }}
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                        title={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        <i className={isExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content Container */}
                  <div className={`timeline-expandable-content ${isExpanded ? "open" : ""}`}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
