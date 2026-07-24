import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import { values, leadership, offices } from "../../data/content";

export const metadata = {
  title: "About Us | Pixel Stack Technologies",
  description: "Learn about Pixel Stack's mission, values, global presence, and leadership team.",
};

export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <PageHero
        label="Our Philosophy"
        title="Empowering People and Businesses Through Innovation"
        description="At Pixel Stack, we believe in fostering a collaborative environment, investing in talent, and delivering meaningful solutions that drive progress for our clients and communities worldwide."
        ctaText="Join Us"
        ctaHref="/career"
      />

      <section className="content-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge technology solutions, unlocking their growth
                potential by connecting them with passionate and skilled engineers.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                We envision transforming IT systems into smart, agile, and AI-driven digital assets.
                With years of expertise, we empower global clients through innovative, adaptive
                solutions that shape a connected future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section dark">
        <div className="container">
          <p className="section-label">Our Values</p>
          <h2 className="section-title">We Believe in Providing Values</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <p className="section-label">Global Presence</p>
          <h2 className="section-title">Our Global Presence</h2>
          <p className="section-intro">
            We support clients in 12+ countries and drive continued growth through innovation and transformation.
          </p>
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

      <section className="content-section">
        <div className="container">
          <p className="section-label">Team</p>
          <h2 className="section-title">Our Team</h2>
          <p className="section-label" style={{color: "#000", marginTop: "1rem", textTransform: "none"}}>
            Behind every successful project is a team of talented developers who turn ideas into reality. Their creativity, technical expertise, and dedication drive our innovation and help us deliver reliable, high-quality solutions for our clients.
          </p>
          <div className="leadership-grid">
            {leadership.map((leader) => (
              <div className="leader-card" key={leader.name}>
                <div className="leader-avatar">{leader.name.charAt(0)}</div>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
