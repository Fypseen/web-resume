import React from "react";
import Link from "next/link";

interface ProjectItem {
  title: string;
  company: string;
  type: string;
  bannerClass: string;
  iconClass: string;
  desc: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  liveLabel?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Faysal Bank Enterprise CRM Integration",
    company: "Avanza Solutions",
    type: "Banking CRM & Microservices",
    bannerClass: "banner-1",
    iconClass: "fas fa-network-wired",
    desc: "Facilitating enterprise CRM software implementation for Faysal Bank Limited on high-throughput Java REST API microservice architecture, dynamic React.js frontend architecture, and automated complaint & service request handling via dynamic programming.",
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "React.js", "Dynamic Programming", "CRM Software"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Case Study",
  },
  {
    title: "RDA Back Office Portal",
    company: "JS Bank",
    type: "Fintech & Banking",
    bannerClass: "banner-2",
    iconClass: "fas fa-university",
    desc: "Roshan Digital Account back office portal to validate records, verify documentation, and facilitate seamless account opening workflows for overseas and local clients.",
    tags: ["Spring Boot", "React", "Oracle", "Node REST APIs", "Microservices", "Security Algorithms"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Portal Info",
  },
  {
    title: "Employee Banking Onboarding Web Application",
    company: "JS Bank",
    type: "Enterprise Automation",
    bannerClass: "banner-3",
    iconClass: "fas fa-users-cog",
    desc: "Automating account opening and management processes for corporate employers. Features end-to-end digital onboarding, robust state management, and real-time event streaming.",
    tags: ["Spring Boot", "React", "Kafka", "ELK Stack", "Winston Logger", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Overview",
  },
  {
    title: "Revamping Core Banking Software",
    company: "Teresol Pvt Ltd",
    type: "Architecture Modernization",
    bannerClass: "banner-4",
    iconClass: "fas fa-cubes",
    desc: "Modernization of legacy core banking software by eliminating legacy codebases and transitioning to an isolated Micro Frontend architecture deployed via Docker at Harbor.",
    tags: ["Vue.js", "Vuex", "xState", "Quarkus REST APIs", "Micro Frontends", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Architecture",
  },
  {
    title: "Roshan Digital Account & Investment Schemes",
    company: "Bank AL Habib",
    type: "Digital Banking & Investments",
    bannerClass: "banner-5",
    iconClass: "fas fa-coins",
    desc: "Web-based application attracting foreign customers to open digital accounts and invest in government-initiated schemes (NPC/INPC, Roshan Apni Car, Samaji Khidmat), loan calculation APIs, and remittances.",
    tags: [".Net MVC5", ".Net Core", "C#", "REST API", "SQL", "Installment Calculator"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Details",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-folder-open"></i> Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production banking platforms, enterprise microservices, and core banking modernization projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className={`project-header-banner ${proj.bannerClass}`}>
                <span className="project-type-tag">{proj.type}</span>
                <div className="project-icon-badge">
                  <i className={proj.iconClass}></i>
                </div>
              </div>
              <div className="project-body">
                <span style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.35rem" }}>
                  <i className="fas fa-building"></i> {proj.company}
                </span>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-footer-actions">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={proj.liveUrl} className="btn btn-primary btn-sm">
                    <i className="fas fa-external-link-alt"></i> {proj.liveLabel || "Overview"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separate Link Banner for Education */}
        <div className="cta-banner">
          <div className="cta-banner-content">
            <h3>
              <i className="fas fa-graduation-cap gradient-text"></i> Explore Academic Credentials &amp; Degrees
            </h3>
            <p>
              View my academic background, Bachelor&apos;s degree in Computer Science from SZABIST Karachi, and technical certifications on my dedicated Education page.
            </p>
          </div>
          <Link href="/education" className="btn btn-primary">
            <span>Go to Education Page</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
