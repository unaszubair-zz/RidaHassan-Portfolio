"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rida.hassan@example.com",
    href: "mailto:rida.hassan@example.com",
    color: "#6c63ff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
    color: "#a855f7",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
    color: "#ec4899",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon – Fri, 9am – 6pm PKT",
    href: null,
    color: "#22c55e",
  },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:rida@example.com", label: "Email" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="section-label">
            <Sparkles size={12} />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you. Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <div
            className="lg:col-span-2 flex flex-col gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium transition-colors"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = color)
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--text-primary)")
                      }
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-light)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-glow)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-secondary)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(34,197,94,0.15)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#22c55e" }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm max-w-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="btn-outline mt-6 text-sm"
                    style={{ padding: "0.6rem 1.5rem" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a topic</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="fulltime">Full-Time Opportunity</option>
                      <option value="collab">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
