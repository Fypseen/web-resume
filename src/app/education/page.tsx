import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Education & Academic Background | Farhan Ali",
  description:
    "Academic background, degrees, coursework, and industry certifications of Farhan Ali, Senior Full-Stack Engineer.",
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
          <div className="education-degrees-grid">
            {/* Degree 1: Master of Science */}
            <div className="education-card">
              <div className="education-card-header">
                <div className="degree-main">
                  <div className="uni-icon-box">
                    <i className="fas fa-university"></i>
                  </div>
                  <div>
                    <h2 className="degree-title">Master of Science in Computer Science</h2>
                    <div className="institution-name">
                      <span>Stanford University</span>
                      <span style={{ color: "var(--text-muted)", fontWeight: "normal" }}>
                        {" "}• Stanford, CA
                      </span>
                    </div>
                  </div>
                </div>
                <span className="edu-period-badge">
                  <i className="far fa-calendar-alt"></i> 2017 — 2019
                </span>
              </div>

              <ul className="edu-details-list">
                <li>
                  <strong>Specialization:</strong> Distributed Systems &amp; Artificial Intelligence
                </li>
                <li>
                  <strong>Academic Standing:</strong> GPA: 3.92 / 4.0 — Graduate Honor Scholar
                </li>
                <li>
                  <strong>Master&apos;s Thesis:</strong> <em>&quot;Fault-Tolerant Consensus Mechanisms in Low-Latency Geo-Replicated Key-Value Stores&quot;</em> — Advised by the Distributed Systems Laboratory.
                </li>
                <li>
                  <strong>Teaching Assistant:</strong> Served as Graduate TA for CS 244 (Advanced Topics in Computer Networks), mentoring 80+ undergraduate and graduate students.
                </li>
              </ul>

              <div className="coursework-wrap">
                <div className="coursework-title">Relevant Graduate Coursework</div>
                <div className="coursework-chips">
                  <span className="course-chip">Distributed Systems</span>
                  <span className="course-chip">Advanced Operating Systems</span>
                  <span className="course-chip">Cloud Computing Architecture</span>
                  <span className="course-chip">Database System Implementation</span>
                  <span className="course-chip">Machine Learning &amp; Neural Nets</span>
                  <span className="course-chip">Cryptography &amp; Computer Security</span>
                  <span className="course-chip">Network Protocol Design</span>
                </div>
              </div>
            </div>

            {/* Degree 2: Bachelor of Science */}
            <div className="education-card">
              <div className="education-card-header">
                <div className="degree-main">
                  <div className="uni-icon-box">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h2 className="degree-title">Bachelor of Science in Software Engineering</h2>
                    <div className="institution-name">
                      <span>University of California, Berkeley</span>
                      <span style={{ color: "var(--text-muted)", fontWeight: "normal" }}>
                        {" "}• Berkeley, CA
                      </span>
                    </div>
                  </div>
                </div>
                <span className="edu-period-badge">
                  <i className="far fa-calendar-alt"></i> 2013 — 2017
                </span>
              </div>

              <ul className="edu-details-list">
                <li>
                  <strong>Academic Honors:</strong> Summa Cum Laude (GPA: 3.88 / 4.0) — Dean&apos;s Honors List (All 8 Semesters)
                </li>
                <li>
                  <strong>Senior Capstone Project:</strong> Designed and deployed an open-source high-throughput microservices auction engine processing 50,000 bids/second with zero race conditions.
                </li>
                <li>
                  <strong>Extracurricular Leadership:</strong> President of the ACM Student Chapter (2016 - 2017), organizing annual 48-hour student hackathons with 600+ participants.
                </li>
              </ul>

              <div className="coursework-wrap">
                <div className="coursework-title">Foundational &amp; Core Coursework</div>
                <div className="coursework-chips">
                  <span className="course-chip">Data Structures &amp; Algorithms</span>
                  <span className="course-chip">Operating Systems &amp; Concurrency</span>
                  <span className="course-chip">Object-Oriented Software Engineering</span>
                  <span className="course-chip">Discrete Mathematics &amp; Logic</span>
                  <span className="course-chip">Compiler Construction</span>
                  <span className="course-chip">Computer Architecture</span>
                  <span className="course-chip">Software Testing &amp; Verification</span>
                  <span className="course-chip">Web Architecture &amp; Interfaces</span>
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
                <i className="fab fa-aws"></i>
              </div>
              <h3 className="cert-title">AWS Certified Solutions Architect</h3>
              <div className="cert-issuer">Amazon Web Services (AWS) — Professional</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Demonstrated expertise in designing highly available, cost-efficient, fault-tolerant, and scalable systems on AWS.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Issued: 2024 • Valid thru 2027
              </div>
            </div>

            {/* Cert 2 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fas fa-dharmachakra"></i>
              </div>
              <h3 className="cert-title">Certified Kubernetes Administrator</h3>
              <div className="cert-issuer">Cloud Native Computing Foundation (CNCF)</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Hands-on validation of Kubernetes cluster installation, configuration, networking, storage, and troubleshooting.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Issued: 2023 • Valid thru 2026
              </div>
            </div>

            {/* Cert 3 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fab fa-meta"></i>
              </div>
              <h3 className="cert-title">Meta Certified Frontend Developer</h3>
              <div className="cert-issuer">Meta / Coursera Credential</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Advanced frontend development, component architecture, client-side routing, and performance optimization in React.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Issued: 2022 • Credential ID: META-FE-8492
              </div>
            </div>

            {/* Cert 4 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fab fa-google"></i>
              </div>
              <h3 className="cert-title">Google Cloud Professional Architect</h3>
              <div className="cert-issuer">Google Cloud Platform (GCP)</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Architecting secure, compliant, scalable cloud infrastructure, multi-region deployments, and big data pipelines.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Issued: 2023 • Valid thru 2026
              </div>
            </div>

            {/* Cert 5 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fas fa-cubes"></i>
              </div>
              <h3 className="cert-title">Terraform Associate (003)</h3>
              <div className="cert-issuer">HashiCorp</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Infrastructure as Code (IaC) principles, module creation, remote state management, and Terraform cloud workflows.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Issued: 2023 • Valid thru 2025
              </div>
            </div>

            {/* Cert 6 */}
            <div className="cert-card">
              <div className="cert-issuer-badge">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="cert-title">MongoDB Certified Developer</h3>
              <div className="cert-issuer">MongoDB University</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                NoSQL schema design, aggregation pipeline mastery, sharding, indexing strategies, and high-volume data modeling.
              </p>
              <div className="cert-date">
                <i className="far fa-calendar-check"></i> Issued: 2021 • Credential ID: MDB-DEV-3910
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
