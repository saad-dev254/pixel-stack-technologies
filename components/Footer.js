import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="navbar-brand">
            <span className="logo-mark">P</span>
            PIXEL STACK
          </Link>
          <p>Leading software & product development agency delivering innovative digital solutions worldwide.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/services">All Services</Link>
          <Link href="/services/web-development">Web Development</Link>
          <Link href="/services/mobile-development">Mobile Apps</Link>
          <Link href="/services/generative-ai">Generative AI</Link>
          <Link href="/services/devops">DevOps</Link>
          <Link href="/services/shopify">Shopify</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about-us">About Us</Link>
          <Link href="/career">Careers</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="mailto:hello@pixelstack.tech">hello@pixelstack.tech</a>
          <Link href="/contact">Get in Touch</Link>
          <Link href="/learning">Blogs</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Pixel Stack Technologies. All rights reserved.</span>
        <span>Global Presence</span>
      </div>
    </footer>
  );
}
