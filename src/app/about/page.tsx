"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiKeras,
  SiPandas,
  SiPowerbi,
  SiPrometheus,
  SiPython,
  SiSelenium,
  SiSqlite,
  SiTensorflow,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "rushikeshakkalwar@gmail.com",
    href: "mailto:rushikeshakkalwar@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 75584 63339",
    href: "tel:+917558463339",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rishi-a-30a3a0260/",
    content: "/in/rishi-a-30a3a0260",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/iostream4YOU",
    content: "/iostream4YOU",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Python",
    icon: <SiPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "FastAPI",
    content: "FastAPI",
    icon: <SiFastapi size={"50px"} color={"#009688"} />,
    color: "#009688",
  },
  {
    name: "TensorFlow",
    content: "TensorFlow",
    icon: <SiTensorflow size={"50px"} color={"#ff6f00"} />,
    color: "#ff6f00",
  },
  {
    name: "Keras",
    content: "Keras",
    icon: <SiKeras size={"50px"} color={"#d00000"} />,
    color: "#d00000",
  },
  {
    name: "Pandas",
    content: "Pandas",
    icon: <SiPandas size={"50px"} color={"#e70488"} />,
    color: "#e70488",
  },
  {
    name: "Power BI",
    content: "Power BI",
    icon: <SiPowerbi size={"50px"} color={"#f2c811"} />,
    color: "#f2c811",
  },
  {
    name: "Selenium",
    content: "Selenium",
    icon: <SiSelenium size={"50px"} color={"#43b02a"} />,
    color: "#43b02a",
  },
  {
    name: "SQLite",
    content: "SQLite",
    icon: <SiSqlite size={"50px"} color={"#0f80cc"} />,
    color: "#0f80cc",
  },
  {
    name: "GitHub Actions",
    content: "GitHub Actions",
    icon: <SiGithubactions size={"50px"} color={"#2088ff"} />,
    color: "#2088ff",
  },
  {
    name: "Prometheus",
    content: "Prometheus",
    icon: <SiPrometheus size={"50px"} color={"#e6522c"} />,
    color: "#e6522c",
  },
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Next.js is a React framework for production",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Next.js is a React framework for production",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "Next.js is a React framework for production",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "Next.js is a React framework for production",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "Next.js is a React framework for production",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Express.js",
    content: "Next.js is a React framework for production",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "MongoDB",
    content: "Next.js is a React framework for production",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Next.js is a React framework for production",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Next.js is a React framework for production",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Next.js is a React framework for production",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Next.js is a React framework for production",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Next.js is a React framework for production",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "NPM",
    content: "Next.js is a React framework for production",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Vercel",
    content: "Next.js is a React framework for production",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Next.js is a React framework for production",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Next.js is a React framework for production",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Rishikesh Akkalwar</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Engineer · Backend, Data &amp; AI
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hi, I&apos;m Rishikesh, a 2026 B.Tech graduate in Computer Science
              and Engineering (AI &amp; ML) from Woxsen University, Hyderabad. I
              build backend services, data pipelines and LLM-powered tools, and I
              like the part where a messy real-world process becomes software
              that runs reliably every day.
            </p>
            <p className="mb-10">
              In my 10-month product development internship at VeePhoenix
              Compliance, working for a US healthcare client, I was the sole
              developer of a FastAPI audit platform that reconciles orders across a
              157-agency, 9-EHR RPA fleet, built an EHR data pipeline, and wrote a Medicare billing
              rules engine that flagged 38% of lines for rework in its pilot.
            </p>
            <p className="mb-10">
              Away from the keyboard I&apos;m the lead vocalist of my university
              music club, a tournament chess player, and I served two years on
              the Woxsen Student Council. I reached the Top 50 in the Tata
              Crucible Campus Quiz 2023.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
