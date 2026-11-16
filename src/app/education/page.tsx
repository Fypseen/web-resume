import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Education & Academic Background | Farhan Ali Daya",
  description:
    "Academic background, Bachelor of Science in Computer Science from SZABIST Karachi, and professional software engineering certifications of Farhan Ali Daya.",
};

export default function EducationPage() {
  return (
    <main>
      {/* ====================================================================
           EDUCATION PAGE HERO
           ==================================================================== */}
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="back-breadcrumb">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Main Resume</span>
          </Link>

          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <span className="section-tag">
              <i className="fas fa-graduation-cap"></i> Academic Credentials
            </span>
            <h1 className="section-title">Education &amp; Certifications</h1>
            <p className="section-subtitle">
              Formal degrees in Computer Science, advanced coursework, academic research, and verified professional engineering certifications.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
           DEGREES SECTION
           ==================================================================== */}
      <section style={{ padding: "1rem 0 4rem" }}>
        <div className="container">
          <div className="education-degrees-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "900px", margin: "0 auto" }}>
            {/* Degree: Bachelor of Science in Computer Science */}
            <div className="education-card">
              <div className="education-card-header">
                <div className="degree-main">
                  <div className="uni-icon-box">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h2 className="degree-title">Bachelor of Science in Computer Science</h2>
                    <div className="institution-name">
                      <span>SZABIST (Shaheed Zulfikar Ali Bhutto Institute of Science and Technology)</span>
                      <span style={{ color: "var(--text-muted)", fontWeight: "normal" }}>
                        {" "}• Karachi, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
                <span className="edu-period-badge">
                  <i className="far fa-calendar-alt"></i> Aug 2016 — Jun 2020
                </span>
              </div>

              <ul className="edu-details-list">
                <li>
                  <strong>Degree Program:</strong> Comprehensive 4-year Bachelor of Science in Computer Science curriculum emphasizing software engineering fundamentals, database systems, distributed architectures, and algorithm design.
                </li>
                <li>
                  <strong>Core Specialization:</strong> Full-stack system development, Object-Oriented Software Construction (Java), Relational and NoSQL Databases (Oracle, SQL), and Modern Web Development.
                </li>
                <li>
                  <strong>Final Year Project &amp; Engineering Labs:</strong> Designed and implemented scalable web platforms with secure user authentication, robust data validation pipelines, and RESTful service integration.
                </li>
                <li>
                  <strong>Practical Competencies:</strong> Hands-on mastery of version control workflows (Git), Agile sprint cycles, software testing, and object-oriented architectural patterns.
                </li>
              </ul>

              <div className="coursework-wrap">
                <div className="coursework-title">Key Computer Science Coursework</div>
                <div className="coursework-chips">
                  <span className="course-chip">Data Structures &amp; Algorithms</span>
                  <span className="course-chip">Object-Oriented Programming (Java)</span>
                  <span className="course-chip">Database Management Systems (Oracle / SQL)</span>
                  <span className="course-chip">Software Engineering &amp; Architecture</span>
                  <span className="course-chip">Web Engineering &amp; REST APIs</span>
                  <span className="course-chip">Operating Systems &amp; Concurrency</span>
                  <span className="course-chip">Computer Networks &amp; Protocols</span>
                  <span className="course-chip">Information Security &amp; Cryptography</span>
                  <span className="course-chip">Agile Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
           CERTIFICATIONS & CREDENTIALS
           ==================================================================== */}
      <section className="cert-honors-section" style={{ background: "var(--bg-secondary)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="fas fa-certificate"></i> Verified Skills
            </span>
            <h2 className="section-title">Professional Certifications</h2>
            <p className="section-subtitle">
              Industry-recognized cloud, architecture, and developer credentials.
            </p>
          </div>

          <div className="cert-grid">
            {/* Cert 1 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fab fa-java"></i>
              </div>
              <h3 className="cert-title">Spring Boot &amp; Java Microservices</h3>
              <div className="cert-issuer">Enterprise Java Architecture</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Demonstrated expertise in building resilient RESTful microservices, secure API gateways, and distributed transaction handling with Spring Boot and Java.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Enterprise Certified Specialist
              </div>
            </div>

            {/* Cert 2 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fab fa-react"></i>
              </div>
              <h3 className="cert-title">React &amp; Micro Frontends</h3>
              <div className="cert-issuer">Modern Frontend Engineering</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Mastery of modular frontend development, reactive state management (xState, Vuex, Redux), and micro-frontend decoupling in enterprise applications.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Advanced Web Architecture
              </div>
            </div>

            {/* Cert 3 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fab fa-docker"></i>
              </div>
              <h3 className="cert-title">Docker &amp; Containerization</h3>
              <div className="cert-issuer">DevOps &amp; Container Registry</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Hands-on deployment of isolated micro-frontend and backend containers through Docker and Harbor with automated CI/CD pipelines.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Containerized Systems
              </div>
            </div>

            {/* Cert 4 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="cert-title">Oracle &amp; SQL Database Administration</h3>
              <div className="cert-issuer">Relational Database Systems</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Proficiency in complex query optimization, indexing strategies, transaction isolation, and high-concurrency relational data modeling.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Database Optimization
              </div>
            </div>

            {/* Cert 5 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="cert-title">Apache Kafka &amp; Event-Driven Systems</h3>
              <div className="cert-issuer">Distributed Event Streaming</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Architecting real-time streaming pipelines, event pub/sub topologies, log aggregation with ELK, and Winston logging.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Event Architecture
              </div>
            </div>

            {/* Cert 6 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="cert-title">MongoDB Certified Developer</h3>
              <div className="cert-issuer">NoSQL Data Solutions</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Document schema modeling, aggregation pipelines, performance indexing, and seamless integration with Node.js and Spring Boot.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> NoSQL Data Engineering
              </div>
            </div>
          </div>

          {/* Back to Resume Navigation CTA */}
          <div className="cta-banner" style={{ marginTop: "4rem" }}>
            <div className="cta-banner-content">
              <h3>Ready to see my industry projects and work experience?</h3>
              <p>
                Explore production systems I&apos;ve built, professional positions held, and technical skill breakdowns.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/#experience" className="btn btn-secondary">
                <i className="fas fa-briefcase"></i> View Experience
              </Link>
              <Link href="/#projects" className="btn btn-primary">
                <i className="fas fa-laptop-code"></i> View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
