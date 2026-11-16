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
            <h3 className="about-narrative-title">
              Senior Full-Stack Engineer &amp; Software Architect
            </h3>
            <p className="about-narrative-lead">
              Building scalable distributed systems, modern web platforms, and secure digital experiences.
            </p>
            <div className="about-narrative-pills">
              <span className="about-pill">Spring Boot</span>
              <span className="about-pill">React</span>
              <span className="about-pill">Microservices</span>
              <span className="about-pill">Micro Frontends</span>
              <span className="about-pill">System Architecture</span>
            </div>
            <p style={{ marginTop: "1.25rem" }}>
              As an experienced Software Engineer, I excel in leading projects with key technologies like <strong>Spring Boot</strong>, <strong>React</strong>, and <strong>micro frontends</strong>. I specialize in system development, security enhancements, and Agile project management with a strong focus on practical solutions and innovative problem-solving.
            </p>
            <p>
              From modernizing legacy core banking products to designing high-concurrency onboarding engines and event-driven architectures with Kafka and ELK, I bridge high-level system design with clean, maintainable, and secure implementation.
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
                <span className="meta-value">Karachi, Pakistan</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-envelope"></i> Email
                </span>
                <span className="meta-value">farhandaya22@gmail.com</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-phone-alt"></i> Phone
                </span>
                <span className="meta-value">+923363087890</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">
                  <i className="fas fa-briefcase"></i> Experience
                </span>
                <span className="meta-value">5+ Years (Senior Software Engineer)</span>
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
                    SZABIST Karachi — B.S. CS &rarr;
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
