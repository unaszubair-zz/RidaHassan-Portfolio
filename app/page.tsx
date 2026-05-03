import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

/* ─── shared project data (used by home + projects page) ─── */
export const projects = [
  {
    id: 1,
    title: "Gulf Estates",
    subtitle: "Dubai Real Estate Platform",
    tagline: "Dubai Luxury Real Estate made easy.",
    bg: "#0C3530",
    arrowDark: false,
    mockupSrc: "/images/gulf-estates-mockup.png",
    logoSrc: "/images/gulf-estates-logo.png",
    logoText: "GE",
    brandName: "GULF ESTATES",
  },
  {
    id: 2,
    title: "Mary Homes",
    subtitle: "Real Estate agent website",
    tagline: "",
    bg: "#101520",
    arrowDark: false,
    mockupSrc: "/images/mary-homes-web-mockup.png",
    logoSrc: "/images/mary-homes-logo.png",
    logoText: "MH",
    brandName: "MARY HOMES",
  },
  {
    id: 3,
    title: "Mary Homes",
    subtitle: "Real Estate agent social media & branding",
    tagline: "",
    bg: "#0f1a22",
    arrowDark: false,
    mockupSrc: "/images/mary-homes-social-mockup.png",
    logoSrc: "/images/mary-homes-logo.png",
    logoText: "MH",
    brandName: "MARY HOMES",
  },
  {
    id: 4,
    title: "SMB Digital Zone",
    subtitle: "Dubai based Advertising Company website rebranding",
    tagline: "",
    bg: "#0a2820",
    arrowDark: false,
    mockupSrc: "/images/smb-mockup.png",
    logoSrc: "/images/smb-logo.png",
    logoText: "SMB",
    brandName: "SMB DIGITAL ZONE",
  },
  {
    id: 5,
    title: "MAAL",
    subtitle: "A budgeting App Design",
    tagline: "",
    bg: "#0d1117",
    arrowDark: false,
    mockupSrc: "/images/maal-mockup.png",
    logoSrc: "/images/maal-logo.png",
    logoText: "M",
    brandName: "MAAL",
  },
  {
    id: 6,
    title: "Food Delivery Application",
    subtitle: "Food Delivery App Design",
    tagline: "",
    bg: "#F5C030",
    arrowDark: true,
    mockupSrc: "/images/food-mockup.png",
    logoSrc: null,
    logoText: "🍔",
    brandName: "",
  },
];

function ProjectCard({
  project,
  priority = false,
}: {
  project: (typeof projects)[0];
  priority?: boolean;
}) {
  return (
    <div
      className="project-card"
      style={{ background: project.bg, borderRadius: "1.25rem" }}
    >
      <div className="flex flex-col sm:flex-row items-stretch w-full">
        {/* Left: brand info */}
        <div className="flex flex-col justify-between p-6 sm:p-8 sm:w-2/5 z-10">
          <div>
            {/* Brand logo / abbr */}
            <div className="flex items-center gap-2 mb-3">
              {project.logoSrc ? (
                <div
                  className="relative w-10 h-10 rounded"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Image
                    src={project.logoSrc}
                    alt={project.brandName}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              ) : (
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-xl"
                  style={{ background: "rgba(0,0,0,0.15)" }}
                >
                  {project.logoText}
                </div>
              )}
              {project.brandName && (
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: project.arrowDark ? "#1a1100" : "rgba(255,255,255,0.75)" }}
                >
                  {project.brandName}
                </span>
              )}
            </div>
            {project.tagline && (
              <p
                className="text-xs mb-1"
                style={{ color: project.arrowDark ? "#1a1100" : "rgba(255,255,255,0.5)" }}
              >
                {project.tagline}
              </p>
            )}
            <p
              className="text-sm sm:text-base font-semibold leading-snug"
              style={{ color: project.arrowDark ? "#1a1100" : "rgba(255,255,255,0.92)" }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Right: mockup image */}
        <div className="relative flex-1 min-h-[160px] sm:min-h-0 overflow-hidden">
          <Image
            src={project.mockupSrc}
            alt={`${project.title} mockup`}
            fill
            className="object-cover object-left-top"
            sizes="(max-width: 640px) 100vw, 60vw"
            priority={priority}
          />
        </div>
      </div>

      {/* Arrow button — absolute bottom-right */}
      <a
        href={`/projects#${project.id}`}
        className={`arrow-btn absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 ${project.arrowDark ? "arrow-btn-dark" : ""}`}
        aria-label={`View ${project.title}`}
      >
        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <main
      className="flex flex-col min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,138,20,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div className="anim-fade-up">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Designing the{" "}
                <span className="text-gold italic">digital</span>{" "}
                silent luxury&nbsp;of&nbsp;tomorrow.
              </h1>
              <p
                className="text-sm sm:text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "var(--muted-2)" }}
              >
                Helping visionary brands stand out by whispering excellence.
                Designing scalable, accessible and unforgettable interactions
                for web and mobile.
              </p>
              <Link href="/about#contact" className="btn-gold">
                Contact now
              </Link>
            </div>

            {/* Right: hero mockup */}
            <div
              className="relative rounded-2xl overflow-hidden anim-fade-in"
              style={{
                minHeight: "320px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/images/hero-mockup.png"
                alt="Portfolio mockup"
                fill
                className="object-cover"
                priority
              />
              {/* Fallback gradient when image missing */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0d1117 0%, #101520 50%, #0C3530 100%)",
                }}
              >
                <div className="text-center" style={{ color: "var(--border-2)" }}>
                  <div className="text-4xl mb-2">🖥️📱</div>
                  <div className="text-xs">hero-mockup.png</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT PREVIEW ══════════════ */}
      <section
        className="py-16 md:py-24"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: photo with skill tags */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  height: "420px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/images/about-desk.jpg"
                  alt="Rida Hasan at work"
                  fill
                  className="object-cover"
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #111316 0%, #1a1d22 100%)" }}
                >
                  <div className="text-center" style={{ color: "var(--border-2)" }}>
                    <div className="text-5xl mb-2">👩‍💻</div>
                    <div className="text-xs">about-desk.jpg</div>
                  </div>
                </div>

                {/* Floating skill tags */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="skill-tag absolute top-6 right-4 float-anim" style={{ animationDelay: "0s" }}>
                    Mobile Design
                  </div>
                  <div className="skill-tag absolute top-1/3 left-3 float-anim" style={{ animationDelay: "0.8s" }}>
                    Dashboard Design
                  </div>
                  <div className="skill-tag absolute bottom-20 right-6 float-anim" style={{ animationDelay: "1.6s" }}>
                    Social Media Post Design
                  </div>
                  <div className="skill-tag absolute bottom-8 left-4 float-anim" style={{ animationDelay: "0.4s" }}>
                    Real Estate Expert
                  </div>
                </div>
              </div>
            </div>

            {/* Right: about text */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold italic mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                About me
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed mb-8"
                style={{ color: "var(--muted-2)" }}
              >
                I&apos;m Rida—a Product Designer and Figma specialist dedicated
                to the art of digital silent luxury. With over 1.5 years of
                experience, I bridge the gap between sophisticated aesthetics and
                functional precision. From seamless mobile apps and responsive
                web interfaces to high-impact social media visuals, I craft
                digital experiences that are as intuitive as they are elegant.
              </p>
              <Link href="/about" className="btn-gold">
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ PROJECTS ══════════════ */}
      <section className="py-16 md:py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-10 text-center">
            <div className="section-heading-decorated">
              <h2
                className="text-2xl sm:text-3xl font-semibold px-4"
                style={{ color: "var(--white)" }}
              >
                My Projects
              </h2>
            </div>
          </div>

          {/* Project cards */}
          <div className="flex flex-col gap-4">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} priority={i < 2} />
            ))}
          </div>

          {/* Go to projects */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "var(--muted-2)" }}
            >
              Go to Projects page
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
