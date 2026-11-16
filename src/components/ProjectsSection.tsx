import React from "react";
import Link from "next/link";

interface ProjectItem {
  title: string;
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
    title: "CloudPulse Telemetry",
    type: "Full-Stack SaaS",
    bannerClass: "banner-1",
    iconClass: "fas fa-chart-line",
    desc: "Real-time cloud observability and APM platform with customizable live dashboard charts, alert triggers, and distributed tracing.",
    tags: ["Next.js 14", "TypeScript", "Go", "TimescaleDB", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Live Demo",
  },
  {
    title: "NeuroSearch Engine",
    type: "AI & Developer Tool",
    bannerClass: "banner-2",
    iconClass: "fas fa-robot",
    desc: "High-speed semantic vector search engine integrating LLM embeddings to enable contextual search over technical docs and codebases.",
    tags: ["Python", "FastAPI", "Qdrant Vector DB", "React", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Live Demo",
  },
  {
    title: "FlowCommerce Core",
    type: "E-Commerce Platform",
    bannerClass: "banner-3",
    iconClass: "fas fa-shopping-bag",
    desc: "Headless microservices e-commerce platform with sub-second checkout, optimistic UI updates, inventory locks, and Stripe integration.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Live Demo",
  },
  {
    title: "TaskStream Collaborative",
    type: "Productivity & Collab",
    bannerClass: "banner-4",
    iconClass: "fas fa-tasks",
    desc: "Multiplayer Kanban board featuring instant CRDT-based synchronization, offline support, drag-and-drop, and granular role permissions.",
    tags: ["TypeScript", "Yjs (CRDT)", "Tailwind", "WebSockets", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Live Demo",
  },
  {
    title: "ZeroTrust Auth Gate",
    type: "Security & Auth",
    bannerClass: "banner-5",
    iconClass: "fas fa-shield-alt",
    desc: "Lightweight identity authentication proxy supporting Passkeys (WebAuthn), TOTP MFA, automated anomaly detection, and session revocation.",
    tags: ["Go", "WebAuthn", "OAuth 2.0", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Live Demo",
  },
  {
    title: "GitMetrics CLI",
    type: "Open Source CLI",
    bannerClass: "banner-6",
    iconClass: "fas fa-terminal",
    desc: "Fast terminal utility generating insightful developer velocity metrics, code ownership heatmaps, and churn diagnostics from git history.",
    tags: ["Rust", "CLI", "Git API", "Cross-Platform"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    liveLabel: "Release",
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
            A showcase of production-ready web apps, open-source utilities, and architectural solutions.
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
                    <i className="fas fa-external-link-alt"></i> {proj.liveLabel || "Live Demo"}
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
              View my academic background, Master&apos;s &amp; Bachelor&apos;s degrees, honors, and verified certifications on my dedicated Education page.
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
