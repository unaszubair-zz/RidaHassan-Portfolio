import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Mail } from "lucide-react";

const workExperience = [
  {
    period: "Aug 2025 – Present",
    company: "SMB DigitalZone, UAE.",
    role: "Working as a Lead UI/UX and Branding designer.",
  },
  {
    period: "Nov 2024 – May 2025",
    company: "Upmotion technologies, Lahore, Pakistan",
    role: "Working as a Generalist UI/UX designer.",
  },
];

const education = [
  {
    period: "October, 2025",
    title: "Complete UI/UX Design Course 2025: Figma + AI + Real Projects",
    org: "by Muhmmad Iqbal",
    bullets: [],
  },
  {
    period: "September, 2024 – December, 2024",
    title: "Google UX Design Certificate, Coursera",
    org: "",
    bullets: [
      "Foundation of User Experience Design",
      "Start the UX design process: Empathize, define and Ideate",
      "Build Wireframes and Low-Fidelity Prototypes from Google",
      "Conduct UX Research and Test Early Concept",
      "Create High Fidelity Design and Prototype in Figma",
      "Conduct Dynamic user interface for website",
      "Create High Fidelity Design and Prototype in Figma",
    ],
  },
  {
    period: "July, 2024",
    title: "Motion Design with Figma animation, motion Graphics, UX/UI",
    org: "",
    bullets: [],
  },
  {
    period: "2016 – 2018",
    title: "MS in Zoology from Punjab University, Lahore, Pakistan",
    org: "",
    bullets: [],
  },
];

const hobbiesImages = [
  { src: "/images/hobby-1.jpg", alt: "Traditional painting artwork" },
  { src: "/images/hobby-2.jpg", alt: "Zentangle mandala art" },
  { src: "/images/hobby-3.jpg", alt: "Nature artwork" },
  { src: "/images/hobby-4.jpg", alt: "Cat illustration" },
];

export default function AboutPage() {
  return (
    <main
      className="flex flex-col min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      {/* ══════════════ HEADER ══════════════ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: text */}
            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold italic mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                About me
              </h1>

              <p className="text-sm sm:text-base mb-2" style={{ color: "var(--white)" }}>
                Hi 👋, I am Rida Hasan, a UI/UX and Branding designer.
              </p>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--muted-2)" }}
              >
                As a UI/UX Designer, I am curious about providing design
                solutions for a seamless user flow. I create equitable,
                accessible and human-centered design solutions for you!
              </p>

              <p
                className="text-sm italic mb-8"
                style={{ color: "var(--muted)" }}
              >
                -Based in Lahore, Pakistan.
              </p>

              {/* CTA buttons */}
              <div
                id="contact"
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="https://wa.me/923160662919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle size={15} />
                  Contact now
                </a>
                <a
                  href="mailto:ridahasn180@gmail.com"
                  className="btn-outline-white"
                >
                  <Mail size={15} />
                  Send an email
                </a>
              </div>
            </div>

            {/* Right: photo with gold border */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-xs sm:max-w-sm"
                style={{ paddingTop: "8px", paddingLeft: "8px" }}
              >
                {/* Gold border frame */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "2px solid var(--gold)",
                    transform: "translate(-8px, -8px)",
                    borderRadius: "1.25rem",
                  }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: "380px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src="/images/rida-photo.jpg"
                    alt="Rida Hasan"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Fallback */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #111316 0%, #1a1d22 100%)" }}
                  >
                    <div className="text-center" style={{ color: "var(--border-2)" }}>
                      <div className="text-5xl mb-2">🧕</div>
                      <div className="text-xs">rida-photo.jpg</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WORK EXPERIENCE ══════════════ */}
      <section
        className="py-14 md:py-20"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-10"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Work Experience
          </h2>

          <div className="flex flex-col gap-8">
            {workExperience.map((item, i) => (
              <div key={i} className="relative flex gap-5 pl-0">
                {/* Timeline left */}
                <div className="relative flex flex-col items-center" style={{ width: "0.65rem", marginTop: "0.35rem" }}>
                  <div className="timeline-dot" />
                  {i < workExperience.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{
                        background: "linear-gradient(to bottom, rgba(201,138,20,0.4), transparent)",
                        minHeight: "48px",
                      }}
                    />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div
                    className="text-sm font-semibold italic mb-1"
                    style={{ color: "var(--gold-light)" }}
                  >
                    {item.period}
                  </div>
                  <div className="font-bold mb-1" style={{ color: "var(--white)" }}>
                    {item.company}
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-2)" }}>
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ EDUCATION & CERTIFICATIONS ══════════════ */}
      <section className="py-14 md:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-10"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Education &amp; Certifications
          </h2>

          <div className="flex flex-col gap-8">
            {education.map((item, i) => (
              <div key={i} className="flex gap-5">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center" style={{ width: "0.65rem", marginTop: "0.35rem" }}>
                  <div className="timeline-dot" />
                  {i < education.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{
                        background: "linear-gradient(to bottom, rgba(201,138,20,0.35), transparent)",
                        minHeight: "60px",
                      }}
                    />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div
                    className="text-sm font-semibold italic mb-1"
                    style={{ color: "var(--gold-light)" }}
                  >
                    {item.period}
                  </div>
                  <div className="font-bold leading-snug mb-0.5" style={{ color: "var(--white)" }}>
                    {item.title}
                  </div>
                  {item.org && (
                    <div
                      className="text-sm italic mb-2"
                      style={{ color: "var(--muted-2)" }}
                    >
                      {item.org}
                    </div>
                  )}
                  {item.bullets.length > 0 && (
                    <ol className="mt-2 flex flex-col gap-1">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm" style={{ color: "var(--muted-2)" }}>
                          <span style={{ color: "var(--muted)", minWidth: "1.2rem" }}>{j + 1}.</span>
                          {b}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ AWARD & ACHIEVEMENTS ══════════════ */}
      <section
        className="py-14 md:py-20"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-8"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Award &amp; Achievements
          </h2>

          <div
            className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl p-6"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Certificate image */}
            <div
              className="relative flex-shrink-0 rounded-xl overflow-hidden"
              style={{ width: "120px", height: "150px", background: "var(--bg)" }}
            >
              <Image
                src="/images/employee-award.jpg"
                alt="Employee of the Month – SMB DigitalZone"
                fill
                className="object-cover"
              />
              {/* Fallback */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-2"
                style={{ background: "linear-gradient(135deg, #111316, #0d1117)" }}
              >
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>award.jpg</div>
              </div>
            </div>

            <div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-2)" }}>
                Awarded as Employee of the Month for{" "}
                <span style={{ color: "var(--white)" }}>Jaunuary, 2026</span> at{" "}
                <strong style={{ color: "var(--gold-light)" }}>SMB DigitalZone</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ HOBBIES & INTERESTS ══════════════ */}
      <section className="py-14 md:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-10"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Hobbies and Interests
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image grid (2x2 + one larger) */}
            <div className="grid grid-cols-2 gap-3">
              {hobbiesImages.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    height: i < 2 ? "160px" : "110px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  {/* Fallback */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #111316, #1a1d22)" }}
                  >
                    <div className="text-2xl">{["🎨", "🌀", "🌿", "🐱"][i]}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <p
                className="text-sm sm:text-base leading-loose"
                style={{ color: "var(--muted-2)" }}
              >
                Beyond the digital canvas, I find balance through traditional
                painting and hands-on crafting. Engaging with physical mediums
                allows me to explore color theory and tactile composition in
                their purest forms. Whether I&apos;m blending pigments or building a
                physical prototype, this practice refines my attention to detail
                and reminds me that great design is as much about the
                &ldquo;feel&rdquo; as it is about the function.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
