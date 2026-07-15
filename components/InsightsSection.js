import Link from "next/link";
import { insights } from "../data/content";

export default function InsightsSection() {
  return (
    <section className="insights-section">
      <div className="container">
        <p className="section-label">Featured Insights</p>
        <h2 className="section-title">Stories of our transformations</h2>
        <div className="insights-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <div className="insight-thumb" style={{ background: item.bg }} />
              <div className="insight-body">
                <span className="insight-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <Link href={item.href || "/case-studies"} className="insight-link">Explore More →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
