import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";
import { offices } from "../../data/content";

export const metadata = {
  title: "Contact | Pixel Stack Technologies",
  description: "Get in touch with Pixel Stack to discuss your next technology project.",
};

export default function Contact() {
  return (
    <main>
      <Navbar />
      <PageHero
        label="Contact"
        title="Let's discuss your project"
        description="We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals."
      />

      <section className="content-section alt">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-page-info">
              <h2>Get In Touch</h2>
              <p>
                Enter your details and someone from our team will reach out to find a time to
                connect with you.
              </p>
              <div className="contact-detail">
                <strong>Email:</strong> hello@pixelstack.tech
              </div>
              <div className="contact-detail">
                <strong>Phone:</strong> +1 (408) 555-0192
              </div>
              <div className="contact-detail">
                <strong>Head Office:</strong> Lahore, Pakistan
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <p className="section-label">Global Presence</p>
          <h2 className="section-title">We&apos;re across 5 continents</h2>
          <p className="section-intro">Explore our office nearest to you.</p>
          <div className="offices-grid">
            {offices.map((office) => (
              <div className="office-card" key={office.city}>
                <span className="office-type">{office.type}</span>
                <h3>{office.city}</h3>
                <p className="office-country">{office.country}</p>
                <p>{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
