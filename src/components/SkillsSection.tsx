"use client";

import React, { useState } from "react";

interface SkillItem {
  id: string;
  title: string;
  subtitle: string;
  iconClass: string;
  priority: "core" | "specialization" | "supporting";
  technologies: string[];
}

const skillCategories: SkillItem[] = [
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Core Expertise",
    iconClass: "fas fa-server",
    priority: "core",
    technologies: ["Java", "Spring Boot", "FastAPI", "REST APIs", "Microservices", "Node js"],
  },
  {
    id: "integration",
    title: "Enterprise Integration",
    subtitle: "Core Expertise",
    iconClass: "fas fa-link",
    priority: "core",
    technologies: ["Temenos Infinity", "SSO", "BPC Cards Management"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Core Expertise",
    iconClass: "fas fa-desktop",
    priority: "core",
    technologies: ["React", "JavaScript", "Vue", "Vuex", "Xstate"],
  },
  {
    id: "banking",
    title: "Banking & Security",
    subtitle: "Specialization",
    iconClass: "fas fa-shield-alt",
    priority: "specialization",
    technologies: ["Transmit Security", "SCA", "OTP", "Transaction Signing"],
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Technical Skills",
    iconClass: "fas fa-database",
    priority: "supporting",
    technologies: ["MySQL", "Oracle", "SQL", "MongoDB"],
  },
  {
    id: "devops",
    title: "Tools & DevOps",
    subtitle: "Technical Skills",
    iconClass: "fas fa-cloud",
    priority: "supporting",
    technologies: ["Git", "Docker", "Postman", "Linux", "OpenShift"],
  },
];

const filterPills = [
  { label: "All Skills", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "Integration", value: "integration" },
  { label: "Banking & Security", value: "banking" },
  { label: "Database", value: "database" },
  { label: "Frontend", value: "frontend" },
  { label: "DevOps", value: "devops" },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const visibleSkills =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((skill) => skill.id === activeFilter);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header styled identically to About Me */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-code"></i> Skills
          </span>
          <h2 className="section-title">Technologies &amp; Skills</h2>
          <p className="section-subtitle">
            Tools and technologies I use to build scalable, secure and reliable enterprise applications.
          </p>
        </div>

        <div className="compact-skills-card">
          {/* Counter Row */}
          <div className="compact-count-row">
            <span className="compact-count-number">06</span>
            <span className="compact-count-label">Technical Domains</span>
          </div>

          {/* Filter Pills */}
          <div className="compact-filters-bar" id="skills-filters">
            {filterPills.map((pill) => (
              <button
                key={pill.value}
                className={`compact-filter-pill ${activeFilter === pill.value ? "active" : ""}`}
                onClick={() => setActiveFilter(pill.value)}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* 2-Column Compact Grid */}
          <div className="compact-grid" id="compact-skills-grid">
            {visibleSkills.map((skill) => (
              <article key={skill.id} className={`compact-item-card ${skill.priority}`}>
                <div className="compact-card-top">
                  <div className="compact-icon-wrap">
                    <i className={skill.iconClass}></i>
                  </div>
                  <span className={`compact-badge ${skill.priority}`}>
                    {skill.subtitle}
                  </span>
                </div>

                <h3 className="compact-item-title">{skill.title}</h3>

                <p className="compact-item-tech">
                  {skill.technologies.join(" · ")}
                </p>
              </article>
            ))}
          </div>

          {/* Footer Row with Arrow Button */}
          <div className="compact-card-footer">
            <span className="compact-footer-text">
              Interactive preview of the updated skills dashboard.
            </span>
            <button
              className="compact-arrow-btn"
              id="toggle-detailed-skills"
              title={isDrawerOpen ? "Collapse detailed view" : "View detailed metrics & progress bars"}
              aria-label="Toggle detailed skills"
              onClick={() => setIsDrawerOpen((prev) => !prev)}
            >
              <i className={isDrawerOpen ? "fas fa-chevron-up" : "fas fa-arrow-down"}></i>
            </button>
          </div>

          {/* Collapsible Detailed Section */}
          <div className={`detailed-skills-drawer ${isDrawerOpen ? "open" : ""}`} id="detailed-skills-drawer">
            <div
              className="section-header"
              style={{ textAlign: "left", maxWidth: "100%", marginBottom: "2rem" }}
            >
              <span className="section-tag">
                <i className="fas fa-chart-line"></i> Detailed Capabilities
              </span>
              <h3 className="section-title" style={{ fontSize: "1.5rem" }}>
                Technology Stack
              </h3>
            </div>

            <div className="skills-categories-grid">
              {/* Category 1: Frontend */}
              <div className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h4 className="category-title" style={{ fontSize: "1.15rem" }}>
                    Frontend Development
                  </h4>
                </div>
                <div className="skills-pills-wrap">
                  <span className="skill-pill"><i className="fab fa-react"></i> React</span>
                  <span className="skill-pill"><i className="fab fa-js"></i> JavaScript</span>
                  <span className="skill-pill"><i className="fab fa-vuejs"></i> Vue.js</span>
                  <span className="skill-pill"><i className="fas fa-layer-group"></i> Redux Toolkit / Vuex</span>
                </div>
              </div>

              {/* Category 2: Databases & Cloud */}
              <div className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <h4 className="category-title" style={{ fontSize: "1.15rem" }}>
                    Databases &amp; Cloud
                  </h4>
                </div>
                <div className="skills-pills-wrap">
                  <span className="skill-pill"><i className="fas fa-leaf"></i> MongoDB</span>
                  <span className="skill-pill"><i className="fas fa-database"></i> MySQL</span>
                  <span className="skill-pill"><i className="fas fa-table"></i> SQL</span>
                  <span className="skill-pill"><i className="fab fa-azure"></i> Azure</span>
                  <span className="skill-pill"><i className="fab fa-docker"></i> Docker</span>
                </div>
              </div>

              {/* Category 3: Backend */}
              <div className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <i className="fas fa-server"></i>
                  </div>
                  <h3 className="category-title">Backend &amp; Integration</h3>
                </div>
                <div className="skills-pills-wrap">
                  <span className="skill-pill"><i className="fab fa-java"></i> Java</span>
                  <span className="skill-pill"><i className="fas fa-leaf"></i> Spring Boot</span>
                  <span className="skill-pill"><i className="fab fa-node-js"></i> Node.js</span>
                  <span className="skill-pill"><i className="fas fa-code-branch"></i> Express</span>
                  <span className="skill-pill"><i className="fas fa-bolt"></i> FastAPI</span>
                  <span className="skill-pill"><i className="fas fa-network-wired"></i> REST APIs</span>
                  <span className="skill-pill"><i className="fas fa-cubes"></i> Microservices Architecture</span>
                  <span className="skill-pill"><i className="fas fa-landmark"></i> Temenos Infinity</span>
                  <span className="skill-pill"><i className="fas fa-code"></i> Clean Code &amp; Refactoring</span>
                </div>
              </div>

              {/* Category 4: Tools & Practices */}
              <div className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="category-title">Banking Security &amp; DevOps</h3>
                </div>
                <div className="skills-pills-wrap">
                  <span className="skill-pill"><i className="fas fa-lock"></i> OAuth 2.0 &amp; JWT Security</span>
                  <span className="skill-pill"><i className="fas fa-user-shield"></i> Transmit Security</span>
                  <span className="skill-pill"><i className="fas fa-key"></i> OTP Verification</span>
                  <span className="skill-pill"><i className="fas fa-file-signature"></i> Transaction Signing</span>
                  <span className="skill-pill"><i className="fab fa-docker"></i> Docker</span>
                  <span className="skill-pill"><i className="fab fa-redhat"></i> OpenShift</span>
                  <span className="skill-pill"><i className="fab fa-linux"></i> Linux</span>
                  <span className="skill-pill"><i className="fab fa-git-alt"></i> Git</span>
                  <span className="skill-pill"><i className="fas fa-paper-plane"></i> Postman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
