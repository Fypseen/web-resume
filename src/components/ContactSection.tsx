import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-box">
          <span className="section-tag">
            <i className="fas fa-paper-plane"></i> Get in Touch
          </span>
          <h2 className="contact-title">Let&apos;s Build Something Exceptional Together</h2>
          <p className="contact-desc">
            Whether you have an upcoming project, are looking to scale your engineering team, or just want to chat about architecture, I&apos;d love to connect.
          </p>

          <div className="contact-actions">
            <a href="mailto:farhandaya22@gmail.com" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              <span>farhandaya22@gmail.com</span>
            </a>
            <a href="tel:+923363087890" className="btn btn-secondary">
              <i className="fas fa-phone-alt"></i>
              <span>+92 336 3087890</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <Link href="/education" className="btn btn-outline">
              <i className="fas fa-graduation-cap"></i>
              <span>View Education</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
