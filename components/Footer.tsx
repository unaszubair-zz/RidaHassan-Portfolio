"use client";

import { Mail, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";

const footerLinks = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:rida@example.com" },
  ],
};

const socials = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:rida@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent)" }}
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span
                className="text-xl font-extrabold"
                style={{ color: "var(--text-primary)" }}
              >
                Rida<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              Full-Stack Developer & UI/UX Designer crafting beautiful,
              performant web experiences. Available for freelance and full-time
              opportunities.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "var(--bg-card)",
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
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--accent-light)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t text-xs"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart size={12} style={{ color: "#ec4899" }} fill="#ec4899" />
            {" "}by{" "}
            <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>
              Rida Hassan
            </span>
            {" "}· Built with Next.js & Tailwind CSS
          </p>
          <p>© {new Date().getFullYear()} Rida Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
