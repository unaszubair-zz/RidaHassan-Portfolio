import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "../page";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Projects — Rida Hasan",
  description:
    "Explore UI/UX and branding projects by Rida Hasan — real estate platforms, social media branding, budgeting apps, and more.",
};

export default function ProjectsPage() {
  return (
    <main
      className="flex flex-col min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold italic mb-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              My Projects
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "var(--muted-2)" }}>
              A curated collection of UI/UX and branding work — from luxury real
              estate platforms to lifestyle apps and social media campaigns.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5">
            {projects.map((p, i) => (
              <div
                key={p.id}
                id={String(p.id)}
                className="project-card"
                style={{ background: p.bg, borderRadius: "1.25rem", minHeight: "200px" }}
              >
                <div className="flex flex-col sm:flex-row items-stretch w-full">
                  {/* Left: info */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 sm:w-2/5 z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {p.logoSrc ? (
                          <div
                            className="relative w-10 h-10 rounded"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                          >
                            <Image
                              src={p.logoSrc}
                              alt={p.brandName}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-10 h-10 rounded flex items-center justify-center text-xl"
                            style={{ background: "rgba(0,0,0,0.15)" }}
                          >
                            {p.logoText}
                          </div>
                        )}
                        {p.brandName && (
                          <span
                            className="text-xs font-bold tracking-widest uppercase"
                            style={{
                              color: p.arrowDark
                                ? "#1a1100"
                                : "rgba(255,255,255,0.75)",
                            }}
                          >
                            {p.brandName}
                          </span>
                        )}
                      </div>
                      {p.tagline && (
                        <p
                          className="text-xs mb-1"
                          style={{
                            color: p.arrowDark
                              ? "#1a1100"
                              : "rgba(255,255,255,0.5)",
                          }}
                        >
                          {p.tagline}
                        </p>
                      )}
                      <p
                        className="text-sm sm:text-base font-semibold leading-snug"
                        style={{
                          color: p.arrowDark
                            ? "#1a1100"
                            : "rgba(255,255,255,0.92)",
                        }}
                      >
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: mockup */}
                  <div className="relative flex-1 min-h-[160px] sm:min-h-0 overflow-hidden">
                    <Image
                      src={p.mockupSrc}
                      alt={`${p.title} mockup`}
                      fill
                      className="object-cover object-left-top"
                      sizes="(max-width: 640px) 100vw, 60vw"
                      priority={i < 2}
                    />
                  </div>
                </div>

                {/* Arrow button */}
                <button
                  className={`arrow-btn absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 ${
                    p.arrowDark ? "arrow-btn-dark" : ""
                  }`}
                  aria-label={`View ${p.title}`}
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
