"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
type Category = "Websites" | "Apps" | "Dashboard" | "Social Media" | "Logos";

type BannerProject = {
  id: number;
  cardType: "banner";
  categories: Category[];
  title: string;
  subtitle: string;
  bg: string;
  textDark?: boolean;   // true when bg is light
  brandLogoSrc?: string | null;
  brandLogoText: string;
  brandName: string;
  tagline?: string;
  mockupSrc: string;
};

type LogoCard = {
  id: number;
  cardType: "logo-card";
  categories: ["Logos"];
  title: string;
  subtitle: string;
  bg: string;
  logoDesignSrc: string;
  logoFallback: string;
};

type Project = BannerProject | LogoCard;

/* ─────────────────────────────────────────
   Project data
───────────────────────────────────────── */
const projects: Project[] = [
  /* ── Websites ── */
  {
    id: 1,
    cardType: "banner",
    categories: ["Websites"],
    title: "Gulf Estates",
    subtitle: "Dubai Real Estate Platform",
    bg: "#111820",
    brandLogoSrc: "/images/gulf-estates-logo.png",
    brandLogoText: "GE",
    brandName: "GULF ESTATES",
    tagline: "Dubai Luxury Real Estate Starts Here",
    mockupSrc: "/images/gulf-estates-mockup.png",
  },
  {
    id: 2,
    cardType: "banner",
    categories: ["Websites"],
    title: "Mary Homes",
    subtitle: "Real Estate agent website",
    bg: "#101420",
    brandLogoSrc: "/images/mary-homes-logo.png",
    brandLogoText: "MH",
    brandName: "MARY HOMES",
    mockupSrc: "/images/mary-homes-web-mockup.png",
  },
  {
    id: 3,
    cardType: "banner",
    categories: ["Websites"],
    title: "SMB Digital Zone",
    subtitle: "Dubai based Advertising Company website rebranding",
    bg: "#0a3530",
    brandLogoSrc: "/images/smb-logo.png",
    brandLogoText: "SMB",
    brandName: "SMB DIGITAL ZONE",
    mockupSrc: "/images/smb-web-mockup.png",
  },
  {
    id: 4,
    cardType: "banner",
    categories: ["Websites"],
    title: "Fundraising website",
    subtitle: "Fundraising website Design (Case Study)",
    bg: "#c8d4ee",
    textDark: true,
    brandLogoSrc: null,
    brandLogoText: "🚀",
    brandName: "FUNDRAISING",
    mockupSrc: "/images/fundraising-mockup.png",
  },

  /* ── Apps ── */
  {
    id: 5,
    cardType: "banner",
    categories: ["Apps"],
    title: "MAAL",
    subtitle: "A budgeting App Design (Case Study)",
    bg: "#0a3535",
    brandLogoSrc: "/images/maal-logo.png",
    brandLogoText: "M",
    brandName: "MAAL",
    tagline: "Budget managing App",
    mockupSrc: "/images/maal-mockup.png",
  },
  {
    id: 6,
    cardType: "banner",
    categories: ["Apps"],
    title: "Food Delivery Application",
    subtitle: "Food Delivery Application (Case Study)",
    bg: "#F5C030",
    textDark: true,
    brandLogoSrc: null,
    brandLogoText: "🍔",
    brandName: "",
    mockupSrc: "/images/food-mockup.png",
  },

  /* ── Dashboard ── */
  {
    id: 7,
    cardType: "banner",
    categories: ["Dashboard"],
    title: "SMB Digital Zone",
    subtitle: "Dubai based Advertising Company dashboard revamp",
    bg: "#0a3030",
    brandLogoSrc: "/images/smb-logo.png",
    brandLogoText: "SMB",
    brandName: "SMB DIGITAL ZONE",
    mockupSrc: "/images/smb-dashboard-mockup.png",
  },

  /* ── Social Media ── */
  {
    id: 8,
    cardType: "banner",
    categories: ["Social Media"],
    title: "Mary Homes",
    subtitle: "Real Estate agent social media & branding",
    bg: "#0c2535",
    brandLogoSrc: "/images/mary-homes-logo.png",
    brandLogoText: "MH",
    brandName: "MARY HOMES",
    mockupSrc: "/images/mary-homes-social-mockup.png",
  },
  {
    id: 9,
    cardType: "banner",
    categories: ["Social Media"],
    title: "SMB Digital Zone",
    subtitle: "Dubai based Advertising Company Social Media",
    bg: "#0a3030",
    brandLogoSrc: "/images/smb-logo.png",
    brandLogoText: "SMB",
    brandName: "SMB DIGITAL ZONE",
    mockupSrc: "/images/smb-social-mockup.png",
  },
  {
    id: 10,
    cardType: "banner",
    categories: ["Social Media"],
    title: "Funds Verifier",
    subtitle: "Trusted partner in the asset marketplace in the United Arab Emirates.",
    bg: "#0c2530",
    brandLogoSrc: null,
    brandLogoText: "🔐",
    brandName: "FUNDS VERIFIER",
    mockupSrc: "/images/funds-verifier-mockup.png",
  },

  /* ── Logos ── */
  {
    id: 11,
    cardType: "logo-card",
    categories: ["Logos"],
    title: "Mary Homes",
    subtitle: "Real Estate agent social media & branding",
    bg: "#1a5045",
    logoDesignSrc: "/images/logo-mary-homes.png",
    logoFallback: "🏠",
  },
  {
    id: 12,
    cardType: "logo-card",
    categories: ["Logos"],
    title: "SMB AXIS",
    subtitle: "Real Estate systems and services dashboard",
    bg: "#180a30",
    logoDesignSrc: "/images/logo-smb-axis.png",
    logoFallback: "🏗️",
  },
  {
    id: 13,
    cardType: "logo-card",
    categories: ["Logos"],
    title: "MAAL",
    subtitle: "A budgeting App",
    bg: "#1a4060",
    logoDesignSrc: "/images/logo-maal.png",
    logoFallback: "📊",
  },
  {
    id: 14,
    cardType: "logo-card",
    categories: ["Logos"],
    title: "Monsieur Berrada",
    subtitle: "Moroccan Patisserie Logo",
    bg: "#3a5075",
    logoDesignSrc: "/images/logo-monsieur-berrada.png",
    logoFallback: "🥐",
  },
];

const CATEGORIES: Category[] = ["Websites", "Apps", "Dashboard", "Social Media", "Logos"];

/* ─────────────────────────────────────────
   Banner card component
───────────────────────────────────────── */
function BannerCard({ p }: { p: BannerProject }) {
  const isDark = p.textDark;
  const textPrimary = isDark ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.92)";
  const textSecondary = isDark ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.5)";
  const arrowClass = isDark ? "arrow-btn-dark" : "";

  return (
    <div
      className="project-card"
      style={{ background: p.bg, minHeight: "220px" }}
    >
      <div className="flex flex-col sm:flex-row w-full items-stretch">
        {/* Left: brand + text */}
        <div className="flex flex-col justify-between p-6 sm:p-8 sm:w-2/5 z-10">
          <div>
            {/* Brand logo row */}
            <div className="flex items-center gap-2.5 mb-4">
              {p.brandLogoSrc ? (
                <div
                  className="relative w-12 h-12 rounded-lg overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.1)", flexShrink: 0 }}
                >
                  <Image
                    src={p.brandLogoSrc}
                    alt={p.brandName}
                    fill
                    className="object-contain p-1"
                  />
                  {/* Fallback */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-xl"
                    style={{ background: "transparent" }}
                  >
                    {p.brandLogoText}
                  </div>
                </div>
              ) : (
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(0,0,0,0.15)" }}
                >
                  {p.brandLogoText}
                </div>
              )}
              {p.brandName && (
                <span
                  className="text-xs font-bold tracking-widest uppercase leading-tight"
                  style={{ color: textSecondary }}
                >
                  {p.brandName}
                </span>
              )}
            </div>

            {p.tagline && (
              <p className="text-xs mb-1" style={{ color: textSecondary }}>
                {p.tagline}
              </p>
            )}

            <h3
              className="text-base sm:text-lg font-semibold leading-snug"
              style={{
                color: textPrimary,
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              }}
            >
              {p.subtitle}
            </h3>
          </div>
        </div>

        {/* Right: mockup image */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ minHeight: "180px" }}
        >
          <Image
            src={p.mockupSrc}
            alt={`${p.title} mockup`}
            fill
            className="object-cover object-left-top"
            sizes="(max-width: 640px) 100vw, 60vw"
          />
          {/* Fallback when image not present */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `${p.bg}cc`, fontSize: "3rem" }}
          >
            {p.brandLogoText.length > 2 ? p.brandLogoText : ""}
          </div>
        </div>
      </div>

      {/* Gold arrow button */}
      <button
        className={`arrow-btn absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 ${arrowClass}`}
        aria-label={`View ${p.title}`}
      >
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   Logo grid card component
───────────────────────────────────────── */
function LogoGridCard({ p }: { p: LogoCard }) {
  return (
    <div className="logo-card" style={{ background: p.bg }}>
      {/* Logo design image */}
      <div className="relative w-full flex-1 flex items-center justify-center" style={{ minHeight: "120px" }}>
        <Image
          src={p.logoDesignSrc}
          alt={`${p.title} logo`}
          fill
          className="object-contain p-6"
        />
        {/* Fallback */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: "transparent" }}
        >
          <span style={{ fontSize: "3.5rem" }}>{p.logoFallback}</span>
        </div>
      </div>
      {/* Caption */}
      <div className="text-center mt-2">
        <p
          className="text-sm sm:text-base leading-snug"
          style={{
            color: "rgba(255,255,255,0.88)",
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1rem",
          }}
        >
          {p.subtitle}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("Websites");

  const filtered = projects.filter((p) =>
    (p.categories as string[]).includes(active)
  );

  const isLogoTab = active === "Logos";

  return (
    <main
      className="flex flex-col min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      <section className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.05,
              color: "var(--white)",
            }}
          >
            Projects
          </h1>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`filter-tab ${active === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {isLogoTab ? (
            /* Logo 2-column grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((p) => (
                <LogoGridCard key={p.id} p={p as LogoCard} />
              ))}
            </div>
          ) : (
            /* Banner cards stacked */
            <div className="flex flex-col gap-4">
              {filtered.map((p) => (
                <BannerCard key={p.id} p={p as BannerProject} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
