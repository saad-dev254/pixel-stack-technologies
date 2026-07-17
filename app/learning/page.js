import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import { blogs } from "../../data/content";
import InsightsSection from "../../components/InsightsSection";

export const metadata = {
  title: "Learning & Blogs | Pixel Stack Technologies",
  description: "Insights, guides, and thought leadership from the Pixel Stack team.",
};

export default function Learning() {
  return (
    <main>
      <Navbar />
      <PageHero
        label="Featured Insights"
        title="Stories, guides, and industry insights"
        description="Stay ahead with our latest articles on technology, design, and digital transformation."
      />

      {/* <section className="content-section">
        <div className="container">
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.slug}>
                <div className="blog-thumb" style={{ background: blog.bg }} />
                <div className="blog-body">
                  <p className="blog-date">{blog.date}</p>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
      <InsightsSection />

      <CTASection />
      <Footer />
    </main>
  );
}
