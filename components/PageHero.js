import Link from "next/link";

export default function PageHero({ label, title, description, ctaText, ctaHref = "/contact", dark = true }) {
  return (
    <section className={`page-hero${dark ? " page-hero-dark" : ""}`}>
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="page-hero-content container hero-enter">
        {label && <p className="section-label">{label}</p>}
        <h1>{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
        {ctaText && <Link href={ctaHref} className="btn-primary">{ctaText}</Link>}
      </div>
    </section>
  );
}
