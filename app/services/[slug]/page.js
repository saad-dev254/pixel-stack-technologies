import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import CTASection from "../../../components/CTASection";
import InsightsSection from "../../../components/InsightsSection";
import { services } from "../../../data/services";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = services[params.slug];
  if (!service) return {};
  return {
    title: `${service.title} | Pixel Stack Technologies`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <main>
      <Navbar />
      <PageHero
        label="Our Services"
        title={service.hero}
        description={service.description}
        ctaText="Get in Touch"
        ctaHref="/contact"
      />

      <section className="content-section">
        <div className="container">
          <div className="detail-overview">
            <div>
              <p className="section-label">Overview</p>
              <h2 className="section-title">{service.title}</h2>
              <p className="section-intro">{service.overview}</p>
            </div>
            <div>
              <p className="section-label">What we are good at</p>
              <ul className="highlights-list">
                {service.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <p className="section-label">Offerings</p>
          <h2 className="section-title">Seamless & Enterprise-ready {service.title}</h2>
          <div className="offerings-grid">
            {service.offerings.map((o) => (
              <div className="offering-card" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <Link href="/contact" className="insight-link" style={{ marginTop: 16, display: "inline-flex" }}>
                  Get in Touch →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-label">Industries</p>
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industry-tags">
            {service.industries.map((ind) => (
              <span className="industry-tag" key={ind}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <InsightsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
