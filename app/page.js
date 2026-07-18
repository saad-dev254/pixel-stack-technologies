"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightsSection from "../components/InsightsSection";
import ContactForm from "../components/ContactForm";
import { serviceList } from "../data/services";
import { industryList } from "../data/industries";
import { insights } from "../data/content";

// Add an innovation video for the top slider/hero
const INNOVATION_VIDEO_URL =
  "/assets/videos/video-2.mp4";

const stats = [
  { number: "150+", label: "Successful Projects" },
  { number: "12+", label: "Countries Supported" },
  { number: "80+", label: "Active Clients" },
  { number: "8+", label: "Years of Experience" },
];

const techStacks = {
  All: ["React", "Next.js", "Node.js", "Python", "TypeScript", "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL", "Kubernetes", "Flutter"],
  Frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Flutter"],
  Backend: ["Node.js", "Python", "Go", "Java", ".NET", "GraphQL"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  DevOps: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
};

// const clients = [
//   "TECHCORP", "INNOVATE", "GLOBALSYS", "NEXUS", "CLOUDFIRST",
//   "DATADRIVE", "SMARTFLOW", "PIXELWAVE", "TECHCORP", "INNOVATE",
// ];
const clients = [
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab00f71b4404c713d8c89_logos-01.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab02c9fab945df8ecd652_logos-02.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab044d9281ad7b01eb05c_logos-07.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab044e11c2d9938bf9843_logos-10.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab044ede52c6b4d634fb7_logos-03.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab044c1ce06c8f1952a3b_logos-08.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab0445968796da62019a4_logos-09.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab04553466eabd27bbbc0_logos-06.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab04558fcd86ef58c2cf8_logos-04.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab0454d364ffcf1b1a924_logos-05.webp",
];
const clients_reverse = [
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db1db91836e20c6bba_logos-18.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4dbbfe90b70d91933ac_logos-25.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4dc5827a724a5d56c50_logos-23.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4dbe11c2d9938c27d18_logos-15.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db8f558dae7c1917f1_logos-16.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db78a325afc063f717_logos-14.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db1cc957344f5bbab1_logos-17.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db772f8afe8c783c4a_logos-21.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db94914b645c6a5cd3_logos-13.webp",
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/685ab4db95f98cac6b04ac5c_logos-19.webp",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAllServices, setShowAllServices] = useState(false);

  const visibleServices = showAllServices ? serviceList : serviceList.slice(0, 6);

  return (
    <main>
      <Navbar />

      <section className="hero" id="top" style={{ position: "relative", overflow: "hidden" }}>
        {/* Innovation Video Layer */}
        <video
          className="hero-video-bg"
          src={INNOVATION_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            opacity: 0.70,
          }}
        />
        <div className="hero-bg" style={{ position: "relative", zIndex: 2 }} />
        <div className="hero-overlay" style={{ position: "relative", zIndex: 3 }} />
        <div className="hero-content" style={{ position: "relative", zIndex: 4 }}>
          <h1>Building at the Speed of Innovation</h1>
          <p className="hero-desc">
            We help companies across North America, Middle East, Africa and Asia Pacific with cutting-edge technology development.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
          <div className="hero-featured">
            <p className="hero-featured-label">Trusted by industry leaders:</p>
            <div className="hero-logos">
              {["Forbes", "TechCrunch", "Business Insider", "Yahoo Finance"].map((name) => (
                <span key={name} className="hero-logo-item">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee-track">
          {/* {[...clients, ...clients].map((client, i) => (
            <span key={i} className="marquee-item">{client}</span>
          ))} */}
          {[...clients, ...clients].map((client, i) => (
            <span key={i} className="marquee-item">
              <img
                src={client}
                alt={"logo"}
                className="marquee-client-logo"
                loading="lazy"
              />
            </span>
          ))}
        </div>

        <div className="marquee-track-reverse">
          {[...clients_reverse, ...clients_reverse].map((client, i) => (
            <span key={i} className="marquee-item">
              <img
                src={client}
                alt={"logo"}
                className="marquee-client-logo"
                loading="lazy"
              />
            </span>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">Our Services</p>
            <h2 className="section-title">Transform Your Business</h2>
          </div>
          <div className="services-grid">
            {visibleServices.map((s) => (
              <Link href={`/services/${s.slug}`} className="service-card-link" key={s.slug}>
                <article className="service-card">
                  <div className={`service-card-bg ${s.bg}`} />
                  <img src={s?.image_url} loading="lazy" alt={s?.title} className="absolute-full" />
                  <div className="service-card-overlay" />
                  <span className="service-card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              </Link>
            ))}
          </div>
          {!showAllServices && serviceList.length > 6 && (
            <div className="view-more-btn">
              <button className="btn-secondary" onClick={() => setShowAllServices(true)}>View More Services</button>
            </div>
          )}
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="container">
          <p className="section-label">Industries</p>
          <h2 className="section-title">Discover our Impact Across Industries</h2>
          <div className="industries-list">
            {industryList.map((ind) => (
              <Link className="industry-item" key={ind.slug} href={`/industry/${ind.slug}`}>
                <span>{ind.title}</span>
                <span className="industry-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section" id="about">
        <div className="container">
          <div className="stats-header">
            <p className="section-label">Pioneering Trust and Innovation</p>
            <h2 className="section-title">Pixel Stack&apos;s Achievements</h2>
            <p>We take pride in empowering businesses worldwide with innovative solutions backed by a global presence.</p>
          </div>
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-section" id="stack">
        <div className="container">
          <p className="section-label">Technology</p>
          <h2 className="section-title">What&apos;s your stack?</h2>
          <p style={{ color: "var(--color-neutral)", marginTop: 12, maxWidth: 700 }}>
            We leverage a powerful and versatile tech stack tailored to meet diverse project needs — from cutting-edge front-end frameworks to robust back-end solutions.
          </p>
          <div className="tech-tabs">
            {Object.keys(techStacks).map((tab) => (
              <button
                key={tab}
                className={`tech-tab${activeTab === tab ? " active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tech-grid">
            {techStacks[activeTab].map((tech) => (
              <span className="tech-item" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="insights-feature-section" style={{ display: "flex", alignItems: "stretch", marginTop: 60, marginBottom: 60 }}>
        <div style={{ flex: 1, padding: '48px 32px', display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="section-label" style={{ color: "#00b4c0", fontWeight: 600, fontSize: 16, marginBottom: 12 }}>Stories of our transformations across Services and Industries</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 16, color: "#163656" }}>From Concept to Completion</h2>
          <p style={{ color: "#6e849c", fontSize: 18, marginBottom: 36 }}>Explore how we solve unique business challenges and deliver real-world value, driving client growth in diverse industries.</p>
          <Link href="/case-studies">
            <button style={{
              background: "#02d0b9",
              color: "#fff",
              border: "none",
              borderRadius: 22,
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: 17,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(2,208,185,0.15)",
              transition: "background 0.2s"
            }}>Explore More</button>
          </Link>
        </div>
        <div style={{ flex: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, padding: "24px 0" }}>
          {insights.slice(0, 6).map((item, i) => (
            <article
              key={item.title}
              style={{
                background: item.bg || "#fff",
                borderRadius: 18,
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                padding: 0,
                overflow: "hidden",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                left: 0, top: 0, right: 0, bottom: 0,
                background: item?.image ? `url(${item.image}) center/cover no-repeat` : item.bg || "#e6f8f6",
                opacity: item?.image ? 0.6 : 1,
                zIndex: 1
              }} />
              <div style={{
                position: "relative",
                zIndex: 2,
                padding: 20,
                background: "rgba(22,54,86,0.82)",
                color: "#fff",
                borderRadius: "0 0 18px 18px"
              }}>
                <span style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#00b4c0",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "2px 12px",
                  marginBottom: 6
                }}>{item.tag}</span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <Link href={item.href || "/case-studies"} style={{
                  color: "#00ffd0",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "underline",
                  marginTop: 10,
                  display: "inline-block"
                }}>Explore More →</Link>
              </div>
            </article>
          ))}
        </div>
      </section> */}
 
      <InsightsSection />

      <section className="careers-section" id="careers">
        <div className="container">
          <p className="section-label">Careers</p>
          <h2 className="section-title">Human-first is our foundation.</h2>
          <p>Join a culture that celebrates excellence and diversity, globally!</p>
          <Link href="/career" className="btn-primary">Join Us</Link>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <p className="section-label">Get In Touch</p>
              <h2>Ready To Get Started</h2>
              <p>Connect with us to explore how we can deliver exceptional IT solutions tailored to your needs.</p>
              <a href="mailto:hello@pixelstack.tech" className="contact-email">
                hello@pixelstack.tech →
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
