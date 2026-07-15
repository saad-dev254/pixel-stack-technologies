"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import { caseStudies, industryFilters } from "../../data/content";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((cs) =>
        cs.industry.toLowerCase().includes(activeFilter.toLowerCase()) ||
        cs.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <main>
      <Navbar />
      <PageHero
        label="Success Stories"
        title="Stories of our transformations"
        description="Explore how we've helped businesses across industries achieve remarkable results."
      />

      <section className="content-section">
        <div className="container">
          <p className="section-label">Industries</p>
          <div className="filter-tabs">
            {industryFilters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab${activeFilter === filter ? " active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="case-grid">
            {filtered.map((cs) => (
              <article className="case-card" key={cs.slug}>
                <div className="case-card-thumb" style={{ background: cs.bg }} />
                <div className="case-card-body">
                  <p className="case-client">{cs.client}</p>
                  <h3>{cs.title}</h3>
                  <p>{cs.summary}</p>
                  <div className="case-tags">
                    <span className="case-tag">{cs.industry}</span>
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span className="case-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="insight-link" style={{ marginTop: 16, display: "inline-flex" }}>
                    Download →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
