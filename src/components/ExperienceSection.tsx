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
    role: "Lead Full-Stack Engineer",
    company: "Apex Financial Technologies",
    location: "San Francisco, CA (Hybrid)",
    period: "2023 — Present",
    description:
      "Leading a squad of 7 engineers building real-time payment reconciliation workflows and fintech analytics dashboards processing $12M+ in daily transaction volume.",
    duties: [
      <>
        <strong>Performance:</strong> Redesigned critical analytics pipeline, cutting dashboard p99 query latency from 3.2s to 240ms using Redis caching and PostgreSQL query optimization.
      </>,
      <>
        <strong>Architecture:</strong> Spearheaded the migration from a monolithic backend to modular microservices with Node.js, Go, and Kafka, boosting overall system reliability to 99.98%.
      </>,
      <>
        <strong>Mentorship &amp; Quality:</strong> Introduced automated end-to-end testing with Playwright and Jest, increasing test coverage from 52% to 88% and shortening release cycles by 40%.
      </>,
    ],
    techStack: ["React", "TypeScript", "Node.js", "Go", "PostgreSQL", "Redis", "Kafka", "AWS"],
  },
  {
    role: "Senior Software Engineer",
    company: "CloudScale Systems",
    location: "Remote",
    period: "2021 — 2023",
    description:
      "Engineered core SaaS infrastructure for a multi-tenant cloud monitoring product serving 150,000+ active enterprise developers.",
    duties: [
      <>
        <strong>Frontend Platform:</strong> Architected a reusable design system and component library in React/TypeScript adopted across 4 major web applications.
      </>,
      <>
        <strong>Scalability:</strong> Designed high-throughput GraphQL APIs handling 25,000+ requests/sec with Node.js and Apollo Federation.
      </>,
      <>
        <strong>DevOps:</strong> Configured zero-downtime deployment pipelines using GitHub Actions, Docker, and AWS ECS, reducing deployment rollbacks by 75%.
      </>,
    ],
    techStack: ["Next.js", "GraphQL", "Docker", "Kubernetes", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Full-Stack Software Developer",
    company: "Hyperion Interactive",
    location: "Austin, TX",
    period: "2019 — 2021",
    description:
      "Developed responsive web applications, customer portals, and internal tools for high-growth e-commerce and retail clients.",
    duties: [
      "Delivered 12+ greenfield web applications from initial specification to production release on schedule.",
      "Integrated third-party payment gateways (Stripe, PayPal) and shipping APIs with webhook handling and automated retry mechanisms.",
      "Optimized web vitals (LCP, FID, CLS), improving Lighthouse performance scores from 64 to 98.",
    ],
    techStack: ["JavaScript (ES6+)", "React", "Express.js", "MySQL", "HTML5 / SASS"],
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
