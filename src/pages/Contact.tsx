import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<{[K in keyof typeof form]?: boolean}>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const validate = () => {
    return {
      name: !form.name,
      email: !form.email || !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      message: !form.message,
    };
  };
  const errors = validate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!errors.name && !errors.email && !errors.message) {
      console.log("Contact Form Submission:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setTimeout(() => setSubmitted(false), 2500);
    }
  };

  return (
    <main className={styles.main}>
      <h2>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            autoComplete="name"
            className={errors.name && touched.name ? styles.invalid : ""}
          />
          {errors.name && touched.name && <div className={styles.error}>Name is required.</div>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            autoComplete="email"
            type="email"
            className={errors.email && touched.email ? styles.invalid : ""}
          />
          {errors.email && touched.email && <div className={styles.error}>Valid email required.</div>}
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={errors.message && touched.message ? styles.invalid : ""}
          />
          {errors.message && touched.message && <div className={styles.error}>Message is required.</div>}
        </div>
        <button className={styles.button} type="submit" disabled={!!(errors.name || errors.email || errors.message)}>
          Send
        </button>
        {submitted && <div className={styles.success}>Message sent! We'll reply soon 🐾</div>}
      </form>
    </main>
  );
}