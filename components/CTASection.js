import Link from "next/link";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <h2 className="section-title">Ready To Get Started</h2>
        <p>Connect with us to explore how we can deliver exceptional IT solutions tailored to your needs.</p>
        <Link href="/contact" className="btn-primary">Get in Touch</Link>
      </div>
    </section>
  );
}
