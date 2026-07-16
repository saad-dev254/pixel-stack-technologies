import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import CTASection from "../../../components/CTASection";
import { industries } from "../../../data/industries";

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return {};
  return {
    title: `${industry.title} | Pixel Stack Technologies`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  return (
    <main>
      <Navbar />
      <PageHero
        label="Industries"
        title={industry.hero}
        description={industry.description}
        ctaText="Get in Touch"
        ctaHref="/contact"
      />

      <section className="content-section">
        <div className="container">
          <p className="section-label">Overview</p>
          <h2 className="section-title">{industry.title}</h2>
          <p className="section-intro">{industry.overview}</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="container">
          <p className="section-label">Challenges</p>
          <h2 className="section-title">Industry Challenges We Solve</h2>
          <div className="challenges-list">
            {industry.challenges.map((c) => (
              <div className="challenge-item" key={c}>
                <span className="challenge-icon">✓</span>
                <p>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Our {industry.title} Expertise</h2>
          <div className="expertise-grid">
            {industry.expertise.map((e) => (
              <div className="expertise-card" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-label">Services</p>
          <h2 className="section-title">Relevant Services</h2>
          <div className="industry-tags">
            {industry.services.map((s) => (
              <Link href="/contact" className="industry-tag" key={s}>{s}</Link>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
