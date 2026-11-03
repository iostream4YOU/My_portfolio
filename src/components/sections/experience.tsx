import Link from "next/link";
import React from "react";
import { ArrowUpRight, BadgeCheck, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const WORK = {
  role: "Product Development Intern",
  company: "VeePhoenix Compliance Pvt. Ltd. (Vivnovation)",
  meta: "Remote · US healthcare client (HIPAA) · Aug 2025 – May 2026",
  points: [
    "Sole developer of an RPA audit platform: a FastAPI + Firestore service with 11 REST endpoints that ingests bot runs through API-key-protected bulk APIs and reconciles signed vs. unsigned orders across a 157-agency, 9-EHR RPA fleet.",
    "Built a Medicare billing auditor: a rules engine that validates ICD-10, CPT, episode and service dates and fuzzy-matches order PDFs. In a 4-agency pilot it flagged 482 of 1,255 lines (38%) for rework, each with a fix.",
    "Designed and built MediSync, a roughly 8K-line Kinnser EHR ETL with Selenium extraction, schema validation, JWT-authenticated idempotent upserts and cached NPI lookups.",
    "Shipped the platform's React/Vite dashboard and GitHub Actions CI/CD (static checks, Docker images to GHCR), plus a nightly batch audit, Prometheus metrics, health checks, retries and daily email and webhook alerts.",
  ],
  stack: ["Python", "FastAPI", "Firestore", "React", "Vite", "Docker", "GitHub Actions", "Selenium", "Prometheus"],
};

const CERTS: { name: string; issuer: string; year: string; href: string; featured?: boolean }[] = [
  {
    name: "Building AI Agents and Agentic Workflows (Specialization)",
    issuer: "IBM · Coursera",
    year: "2026",
    href: "https://coursera.org/verify/specialization/0W6JNH7IZT49",
    featured: true,
  },
  {
    name: "Software Engineer (Role Certification)",
    issuer: "HackerRank",
    year: "2026",
    href: "https://www.hackerrank.com/certificates/bf40883b7448",
    featured: true,
  },
  { name: "SQL (Advanced)", issuer: "HackerRank", year: "2025", href: "https://www.hackerrank.com/certificates/54a4d0f67224", featured: true },
  { name: "Introduction to TensorFlow for AI, ML and DL", issuer: "DeepLearning.AI · Coursera", year: "2024", href: "https://coursera.org/verify/RSWCQ28G8AXE" },
  { name: "Deep Learning & Neural Networks with Keras", issuer: "IBM · Coursera", year: "2024", href: "https://coursera.org/verify/WPSDMTYRSNCD" },
  { name: "REST API (Intermediate)", issuer: "HackerRank", year: "2025", href: "https://www.hackerrank.com/certificates/aadc5219ad9e" },
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", year: "2025", href: "https://www.hackerrank.com/certificates/652877ae338e" },
  { name: "Software Engineer Intern", issuer: "HackerRank", year: "2025", href: "https://www.hackerrank.com/certificates/821af693da61" },
  { name: "Python (Basic)", issuer: "HackerRank", year: "2026", href: "https://www.hackerrank.com/certificates/36c32175c0c3" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank", year: "2025", href: "https://www.hackerrank.com/certificates/3e689583ebd8" },
  { name: "Operating Systems Fundamentals", issuer: "Akamai · Coursera", year: "2024", href: "https://coursera.org/verify/H3QS2VRQQSKX" },
  { name: "Introduction to Web Development", issuer: "UC Davis · Coursera", year: "2025", href: "https://coursera.org/verify/7BPN8REIUN5Y" },
  { name: "Object Oriented Programming in Java", issuer: "UC San Diego · Coursera", year: "2023", href: "https://coursera.org/verify/SALJ65DW2FBP" },
  { name: "Data Structures", issuer: "UC San Diego · Coursera", year: "2023", href: "https://coursera.org/verify/FCN6Z4ZSX369" },
];

const ACHIEVEMENTS = [
  "Built Buy or Wait?, an LLM affordability agent, in 24 hours at HackerRank Orchestrate 2026",
  "Top 50, Tata Crucible Campus Quiz 2023",
  "Woxsen Student Council (2 years) · member, Codex coding club",
];

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2
    className={cn(
      "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-16",
      "bg-gradient-to-b from-black/80 to-black/50",
      "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
    )}
  >
    {children}
  </h2>
);

const Panel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-sm p-6 md:p-8",
      className
    )}
  >
    {children}
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 pb-24 font-sans">
      <Link href={"#experience"}>
        <Heading>Experience</Heading>
      </Link>

      <Panel className="mb-6">
        <div className="flex items-start gap-4">
          <Briefcase className="w-7 h-7 shrink-0 mt-1 text-yellow-400" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold">{WORK.role}</h3>
            <p className="text-neutral-700 dark:text-neutral-300">{WORK.company}</p>
            <p className="text-sm text-neutral-500 mt-1">{WORK.meta}</p>
          </div>
        </div>
        <ul className="mt-6 space-y-3 list-disc pl-6 text-neutral-700 dark:text-neutral-300">
          {WORK.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-6">
          {WORK.stack.map((s) => (
            <span key={s} className="text-xs rounded-full border border-black/10 dark:border-white/15 px-3 py-1">
              {s}
            </span>
          ))}
        </div>
      </Panel>

      <Panel className="mb-16">
        <div className="flex items-start gap-4">
          <GraduationCap className="w-7 h-7 shrink-0 mt-1 text-yellow-400" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              B.Tech, Computer Science and Engineering (AI &amp; ML)
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">Woxsen University, Hyderabad · 2022 – 2026</p>
            <p className="text-sm text-neutral-500 mt-1">
              Coursework: Data Structures &amp; Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering
            </p>
          </div>
        </div>
      </Panel>

      <Heading>Certifications</Heading>
      <p className="text-center text-neutral-500 -mt-10 mb-10 text-sm">Every card links to its verification page.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {CERTS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noopener"
            className={cn(
              "group rounded-xl border p-4 transition-colors bg-white/70 dark:bg-black/40 backdrop-blur-sm",
              c.featured
                ? "border-yellow-400/50 hover:border-yellow-400"
                : "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold leading-snug">{c.name}</p>
                <p className="text-sm text-neutral-500 mt-1">
                  {c.issuer} · {c.year}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-neutral-400 group-hover:text-current" />
            </div>
          </Link>
        ))}
      </div>

      <Panel>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BadgeCheck className="w-6 h-6 text-yellow-400" /> Achievements &amp; activities
        </h3>
        <ul className="space-y-2 list-disc pl-6 text-neutral-700 dark:text-neutral-300">
          {ACHIEVEMENTS.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Panel>
    </section>
  );
};

export default ExperienceSection;
