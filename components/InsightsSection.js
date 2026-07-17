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
              <div className="insight-thumb" style={{ position: "relative", background: item.bg }}>
                <img src={item?.image_url} loading="lazy" alt="case study" className="full-image" />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#0000004d",
                    pointerEvents: "none",
                    borderRadius: "inherit",
                  }}
                ></div>
              </div>
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
