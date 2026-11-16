"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
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
              <Link href="/#projects" className="btn btn-primary btn-sm">
                <i className="fas fa-laptop-code"></i>
                <span>View Projects</span>
              </Link>
              <a
                href="/FarhanAli.pdf"
                download="FarhanAli.pdf"
                className="btn btn-secondary btn-sm btn-print-resume"
              >
                <i className="fas fa-arrow-down"></i>
                <span>Download Resume</span>
              </a>
              <Link href="/education" className="btn btn-outline btn-sm">
                <i className="fas fa-graduation-cap"></i>
                <span>View Education</span>
              </Link>
            </div>

            {/* Social Links & Mobile Stats */}
            <div className="hero-meta-row">
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

              {/* Stats shown on md/mobile when profile card is hidden */}
              <div className="hero-stats-row hero-stats-mobile-only">
                <div className="hero-stat-item">
                  <span className="hero-stat-number gradient-text">5+</span>
                  <span className="hero-stat-label">Years Exp</span>
                </div>
                <div className="hero-stat-divider"></div>
                <div className="hero-stat-item">
                  <span className="hero-stat-number gradient-text">7</span>
                  <span className="hero-stat-label">Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual / Profile Card (Visible on Desktop, hidden on md/mobile) */}
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
                  <span className="stat-number gradient-text">7</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
