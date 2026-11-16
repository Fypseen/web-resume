"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

function getSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const docTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
  if (docTheme) return docTheme;
  const stored = localStorage.getItem("resume-theme") as "dark" | "light" | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

export default function Navbar() {
  const pathname = usePathname();
  const isEducationPage = pathname === "/education";

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const navMenuRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("resume-theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isMobileOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileOpen]);

  // Scrollspy on main page
  useEffect(() => {
    if (isEducationPage) return;

    const sections = ["hero", "about", "skills", "experience", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEducationPage]);

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-container">
        <Link href="/" className="brand-logo" aria-label="Farhan Ali Home" onClick={closeMobile}>
          <span className="brand-icon">FA</span>
          <span>Farhan Ali</span>
        </Link>

        {/* Desktop & Mobile Menu */}
        <nav
          ref={navMenuRef}
          className={`nav-menu ${isMobileOpen ? "open" : ""}`}
          id="nav-menu"
        >
          <Link
            href="/#hero"
            className={`nav-link ${!isEducationPage && activeSection === "hero" ? "active" : ""}`}
            onClick={closeMobile}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className={`nav-link ${!isEducationPage && activeSection === "about" ? "active" : ""}`}
            onClick={closeMobile}
          >
            About
          </Link>
          <Link
            href="/#skills"
            className={`nav-link ${!isEducationPage && activeSection === "skills" ? "active" : ""}`}
            onClick={closeMobile}
          >
            Skills
          </Link>
          <Link
            href="/#experience"
            className={`nav-link ${!isEducationPage && activeSection === "experience" ? "active" : ""}`}
            onClick={closeMobile}
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className={`nav-link ${!isEducationPage && activeSection === "projects" ? "active" : ""}`}
            onClick={closeMobile}
          >
            Projects
          </Link>
          {/* Separate Link for Education */}
          <Link
            href="/education"
            className={`nav-link nav-link-education ${isEducationPage ? "active" : ""}`}
            onClick={closeMobile}
          >
            <i className="fas fa-graduation-cap"></i>
            <span>Education</span>
          </Link>
        </nav>

        {/* Nav Actions (Theme Toggle & CTA) */}
        <div className="nav-actions">
          <button
            id="theme-toggle"
            className="theme-toggle-btn"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
          >
            <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
          <button
            className="btn btn-primary btn-sm btn-print-resume"
            title="Print or save as PDF"
            onClick={handlePrint}
          >
            <i className="fas fa-file-pdf"></i>
            <span>PDF Resume</span>
          </button>
          <button
            ref={toggleBtnRef}
            id="mobile-nav-toggle"
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <i className={isMobileOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
