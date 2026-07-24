"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const industries = [
  ["Shopify", "/industry/e-commerce"],
  ["Public Sector", "/industry/public-sector"],
  ["Retail & CPG", "/industry/retail-cpg"],
  ["Startups", "/industry/startups"],
  ["Banking & Fintech", "/industry/banking-fintech"],
  ["Gaming", "/industry/gaming"],
  ["Travel & Hospitality", "/industry/travel-hospitality"],
  ["Telecommunication", "/services"],
  ["Oil, Gas, and Energy", "/services"],
  ["E-commerce", "/industry/e-commerce"],
  ["Healthcare & Pharmaceuticals", "/industry/healthcare"],
];

const capabilities = {
  left: [
    { title: "Digital Transformation", items: [["Web development", "/services/web-development"], ["App Development", "/services/mobile-development"], ["Custom Software Development", "/services/custom-development"], ["UX/UI Design", "/services/ui-ux-design"]] },
    { title: "Business Applications", items: [["Dynamics 365 ERP", "/services/dynamics-365-erp"], ["Salesforce", "/services/salesforce"]] },
    { title: "Shopify", items: [["Design & Development", "/services/shopify"], ["Maintenance & Support", "/services/maintenance-and-support"], ["Automation & Apps", "/services/ai-automation"]] },
    { title: "Emerging Technologies", items: [["Blockchain & Cryptography", "/services/blockchain"], ["Gen AI", "/services/generative-ai"], ["Data Analytics", "/services/data-analytics"]] },
    // { title: "Staff Augmentation", items: [] },
  ],
  right: [
    { title: "Quality Assurance", href: "/services/quality-assurance" },
    { title: "DevOps", href: "/services/devops" },
    { title: "Cybersecurity", href: "/services/cybersecurity" },
    { title: "SaaS", href: "/services/saas" },
    { title: "Gaming", items: [["Art & Design", "/services/game-development"], 
      // ["Web3", "/services/blockchain"], ["AR/VR/XR", "/services/game-development"]
    ] },
    { title: "Cloud", items: [["Cloud Application", "/services/cloud-application"], 
      // ["Cloud Ops & Migration", "/services/cloud-maintainance"], 
      // ["Cloud maintenance & integration", "/services/cloud-maintainance"]
    ] },
  ],
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const navRef = useRef(null);

  const close = () => {
    setMenuOpen(false);
    setOpenMegaMenu(null);
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenMegaMenu(null);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpenMegaMenu(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar${openMegaMenu ? " navbar--mega-open" : ""}`}>
      <Link href="/" className="navbar-brand" aria-label="Pixel Stack home" onClick={close}>
        <span className="logo-mark">P</span>
        PIXEL STACK
      </Link>
      <div className={`navbar-menu${menuOpen ? " open" : ""}`}>
        <button
          className="navbar-mega-trigger"
          type="button"
          aria-expanded={openMegaMenu === "capabilities"}  
          aria-controls="capabilities-menu"
          onClick={() => setOpenMegaMenu((menu) => menu === "capabilities" ? null : "capabilities")}
        >
          What we do <span aria-hidden="true" className="navbar-chevron" />
        </button>
        <button
          className="navbar-mega-trigger"
          type="button"
          aria-expanded={openMegaMenu === "industries"}
          aria-controls="industries-menu"
          onClick={() => setOpenMegaMenu((menu) => menu === "industries" ? null : "industries")}
        >
          Who we help <span aria-hidden="true" className="navbar-chevron" />
        </button>
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
      <section
        id="industries-menu"
        className={`industries-mega-menu${openMegaMenu === "industries" ? " is-open" : ""}`}
        aria-label="Industries"
      >
        <div className="industries-mega-menu__inner">
          <h2>Industries</h2>
          <div className="industries-mega-menu__columns">
            <div className="industries-mega-menu__column">
              {industries.slice(0, 6).map(([title, href]) => (
                <Link href={href} key={title} onClick={close}>{title}</Link>
              ))}
            </div>
            <div className="industries-mega-menu__column">
              {industries.slice(6).map(([title, href]) => (
                <Link href={href} key={title} onClick={close}>{title}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="capabilities-menu"
        className={`capabilities-mega-menu${openMegaMenu === "capabilities" ? " is-open" : ""}`}
        aria-label="Capabilities"
      >
        <div className="capabilities-mega-menu__inner">
          <h2>Capabilities</h2>
          <div className="capabilities-mega-menu__columns">
            <div className="capabilities-mega-menu__column">
              {capabilities.left.map((group) => (
                <div className="capabilities-mega-menu__group" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.items.map(([title, href]) => <Link href={href} key={title} onClick={close}>{title}</Link>)}
                </div>
              ))}
            </div>
            <div className="capabilities-mega-menu__column">
              {capabilities.right.map((group) => (
                <div className="capabilities-mega-menu__group" key={group.title}>
                  {group.href ? <Link href={group.href} onClick={close}><h3>{group.title}</h3></Link> : <h3>{group.title}</h3>}
                  {group.items?.map(([title, href]) => <Link href={href} key={title} onClick={close}>{title}</Link>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
