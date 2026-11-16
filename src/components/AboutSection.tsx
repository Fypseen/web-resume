import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-user"></i> Intro
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A brief overview of my engineering philosophy, background, and what drives my work.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Narrative */}
          <div className="about-narrative">
            <p>
              I am a results-oriented <strong>Senior Full-Stack Engineer</strong> with over 6 years of hands-on experience designing and delivering resilient distributed systems, modern reactive web applications, and mission-critical cloud backends.
            </p>
            <p>
              My journey began with deep curiosity about how systems communicate at scale. Today, I bridge the gap between <strong>intuitive, accessible frontend interfaces</strong> and <strong>robust, fault-tolerant backend architectures</strong>. I love turning complex business requirements into elegant, maintainable codebases.
            </p>
            <p>
              Beyond writing code, I actively mentor junior engineers, champion automated testing and CI/CD pipelines, and contribute to open-source developer tooling. When I&apos;m not coding, you can find me reading system design papers, exploring smart home tech, or hiking scenic trails.
            </p>
          </div>

          {/* Right Meta Details */}
          <div className="about-meta-card">
            <h3 className="about-meta-title">
              <i className="fas fa-id-card gradient-text"></i> Quick Info
            </h3>
            <div className="about-meta-list">
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-map-marker-alt"></i> Location
                </span>
                <span className="meta-value">San Francisco, CA (Open to Remote)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-envelope"></i> Email
                </span>
                <span className="meta-value">Farhandaya72@gmail.com</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-briefcase"></i> Experience
                </span>
                <span className="meta-value">6+ Years (Senior / Staff)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-language"></i> Languages
                </span>
                <span className="meta-value">English (Native), Spanish (Conversational)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-graduation-cap"></i> Education
                </span>
                <span className="meta-value">
                  <Link
                    href="/education"
                    style={{ color: "var(--accent-primary)", textDecoration: "underline" }}
                  >
                    B.S. in Computer Science &rarr;
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Highlight Cards */}
        <div className="highlights-cards-grid">
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Frontend Architecture</h3>
            <p>
              Building responsive, accessible, ultra-fast web interfaces using React, Next.js, TypeScript, and modern CSS systems.
            </p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Distributed Backends</h3>
            <p>
              Designing secure REST &amp; GraphQL APIs, event-driven microservices with Node.js, Go, Redis, and relational/NoSQL datastores.
            </p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud &amp; DevOps</h3>
            <p>
              Deploying production systems on AWS, containerizing with Docker &amp; Kubernetes, and enforcing strict CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
