"use client";

export default function ContactForm({ title = "Get In Touch" }) {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <h3>{title}</h3>
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company Name *</label>
        <input type="text" id="company" name="company" required />
      </div>
      <div className="form-group">
        <label htmlFor="region">Region *</label>
        <select id="region" name="region" required defaultValue="">
          <option value="" disabled>Select Region</option>
          <option>Middle East & North Africa</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Rest of World</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="details">Project Details *</label>
        <textarea id="details" name="details" required />
      </div>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}
