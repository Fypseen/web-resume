import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-copy">
          &copy; <span id="current-year">2026</span> Farhan Ali. All rights reserved. Crafted with Next.js &amp; Modern Web Architecture.
        </div>
        <nav className="footer-nav">
          <Link href="/#hero">Back to Top</Link>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/education" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
            Education &rarr;
          </Link>
        </nav>
      </div>
    </footer>
  );
}
