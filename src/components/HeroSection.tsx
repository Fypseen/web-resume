"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          {/* Text Introduction */}
          <div className="hero-text">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for new opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">Farhan Ali Daya</span>
            </h1>

            <h2 className="hero-role-title">
              Senior Full-Stack Engineer &amp; Software Architect
            </h2>

            <p className="hero-lead">
              Building scalable distributed systems, modern web platforms, and secure digital experiences.
            </p>

            {/* Pill Tags */}
            <div className="hero-pills">
              <span className="hero-pill">Spring Boot</span>
              <span className="hero-pill">React</span>
              <span className="hero-pill">Microservices</span>
              <span className="hero-pill">Micro Frontends</span>
              <span className="hero-pill">System Architecture</span>
            </div>

            <div className="hero-actions">
              <Link href="/#projects" className="btn btn-primary">
                <i className="fas fa-laptop-code"></i>
                <span>View Projects</span>
              </Link>
              <button className="btn btn-secondary btn-print-resume" onClick={handlePrint}>
                <i className="fas fa-arrow-down"></i>
                <span>Download Resume</span>
              </button>
              <Link href="/education" className="btn btn-outline">
                <i className="fas fa-graduation-cap"></i>
                <span>View Education</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span>Connect:</span>
              <div className="social-links-list">
                <a
                  href="https://github.com/FarhanDaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/farhan-ali-daya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="mailto:farhandaya22@gmail.com"
                  className="social-icon-btn"
                  aria-label="Email Me"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual / Profile Card */}
          <div className="hero-visual">
            <div className="profile-card">
              <div className="avatar-wrapper">
                <Image
                  src="/assets/avatar.svg"
                  alt="Farhan Ali Daya Portrait"
                  className="avatar-img"
                  width={120}
                  height={120}
                  priority
                />
                <div className="avatar-badge" title="Verified Engineer">
                  <i className="fas fa-check"></i>
                </div>
              </div>

              <h2 className="profile-name">Farhan Ali Daya</h2>
              <p className="profile-role">Senior Software Engineer</p>

              <div className="profile-stats-grid">
                <div className="stat-item">
                  <span className="stat-number gradient-text">5+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number gradient-text">35+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number gradient-text">99.9%</span>
                  <span className="stat-label">Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
