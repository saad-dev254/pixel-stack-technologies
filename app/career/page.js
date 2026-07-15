import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import { careerSteps, careerPathways, benefits } from "../../data/content";

export const metadata = {
  title: "Careers | Pixel Stack Technologies",
  description: "Join Pixel Stack — a culture that celebrates excellence and diversity, globally.",
};

const globalHighlights = [
  {
    title: "A Truly Global Workforce",
    desc: "From North America to the Middle East and APAC, our engineers and innovators span the globe.",
  },
  {
    title: "Diverse Perspectives",
    desc: "Our team's varied cultural and professional backgrounds drive creativity and innovation.",
  },
  {
    title: "Seamless Collaboration",
    desc: "Leveraging cutting-edge tools and a unified vision, we overcome borders to deliver excellence.",
  },
  {
    title: "Opportunities Without Limits",
    desc: "No matter where you are, Pixel Stack offers roles that let you contribute and grow globally.",
  },
];

export default function Career() {
  return (
    <main>
      <Navbar />
      <PageHero
        label="Careers"
        title="Human-first is our foundation"
        description="Join a culture that celebrates excellence and diversity, globally!"
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      <section className="content-section">
        <div className="container">
          <p className="section-label">Hiring Process</p>
          <h2 className="section-title">Your Path to Joining Pixel Stack</h2>
          <div className="steps-grid">
            {careerSteps.map((step) => (
              <div className="step-card" key={step.step}>
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <p className="section-label">Career Pathways</p>
          <h2 className="section-title">Your Growth, Our Priority</h2>
          <p className="section-intro">
            At Pixel Stack, we provide a clear and rewarding path to help you achieve your professional aspirations.
          </p>
          <div className="pathway-list">
            {careerPathways.map((role, i) => (
              <div className="pathway-item" key={role}>
                <span className="pathway-rank">{i + 1}</span>
                <h3>{role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section dark">
        <div className="container">
          <p className="section-label">Global Careers</p>
          <h2 className="section-title">Connecting Talent Across the World</h2>
          <p className="section-intro">
            We take pride in our global presence, bringing together talented individuals from diverse
            cultures and regions to create impactful solutions.
          </p>
          <div className="global-cards">
            {globalHighlights.map((item) => (
              <div className="global-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-label">Benefits</p>
          <h2 className="section-title">Why Join Us</h2>
          <p className="section-intro">Unlock growth, impact, and opportunities.</p>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div className="benefit-item" key={b}>{b}</div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/contact" className="btn-primary">Apply Now</Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
