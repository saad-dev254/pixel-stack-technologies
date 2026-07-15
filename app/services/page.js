import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import { serviceList } from "../../data/services";

export const metadata = {
  title: "Our Services | Pixel Stack Technologies",
  description: "Explore Pixel Stack's full range of software development, AI, cloud, and digital transformation services.",
};

export default function ServicesIndex() {
  return (
    <main>
      <Navbar />
      <PageHero
        label="Our Services"
        title="Transform Your Business"
        description="From web and mobile development to AI, cloud, gaming, and enterprise solutions — we deliver end-to-end technology services."
        ctaText="Get in Touch"
        ctaHref="/contact"
      />

      <section className="content-section">
        <div className="container">
          <div className="services-grid">
            {serviceList.map((s) => (
              <Link href={`/services/${s.slug}`} className="service-card-link" key={s.slug}>
                <article className="service-card">
                  <div className={`service-card-bg ${s.bg}`} />
                  <div className="service-card-overlay" />
                  <span className="service-card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
