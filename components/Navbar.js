"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand" aria-label="Pixel Stack home" onClick={close}>
        <span className="logo-mark">P</span>
        PIXEL STACK
      </Link>
      <div className={`navbar-menu${menuOpen ? " open" : ""}`}>
        <Link href="/services" onClick={close}>What we do</Link>
        <Link href="/industry/banking-fintech" onClick={close}>Who we help</Link>
        <Link href="/about-us" onClick={close}>Who we are</Link>
        <Link href="/case-studies" onClick={close}>How we deliver</Link>
        <Link href="/career" onClick={close}>Join us</Link>
      </div>
      <div className="navbar-actions">
        <Link href="/career" className="btn-secondary">Explore Careers</Link>
        <Link href="/contact" className="btn-primary">Let&apos;s Talk Business</Link>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
