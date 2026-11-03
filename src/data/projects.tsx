import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiBabel,
  SiChakraui,
  SiFastapi,
  SiGooglechrome,
  SiGooglegemini,
  SiMicrosoftexcel,
  SiPandas,
  SiPowerbi,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
  liveLabel = "Visit Website",
}: {
  live: string;
  repo?: string;
  liveLabel?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          {liveLabel}
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  pythonLang: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  gemini: {
    title: "Gemini API",
    bg: "black",
    fg: "white",
    icon: <SiGooglegemini />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  powerbi: {
    title: "Power BI",
    bg: "black",
    fg: "white",
    icon: <SiPowerbi />,
  },
  excel: {
    title: "Excel",
    bg: "black",
    fg: "white",
    icon: <SiMicrosoftexcel />,
  },
  babel: {
    title: "Babel AST",
    bg: "black",
    fg: "white",
    icon: <SiBabel />,
  },
  chrome: {
    title: "Chrome DevTools Protocol",
    bg: "black",
    fg: "white",
    icon: <SiGooglechrome />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "blinkit",
    category: "Live data dashboard",
    title: "Blinkit Sales Analytics",
    src: "/assets/projects-screenshots/blinkit/cover.png",
    screenshots: ["cover.png", "powerbi.png"],
    live: "/projects/blinkit",
    github: "https://github.com/iostream4YOU/Blinkit-Data-Analysis-By-Using-Power-BI",
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.excel, PROJECT_SKILLS.next],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            8,523 grocery items, one dashboard you can actually play with
          </TypographyP>
          <TypographyP className="font-mono">
            I analysed Blinkit&apos;s grocery sales data in Power BI: total and
            average sales, ratings, fat content, item categories, outlet size,
            outlet tier and establishment year. The finding: Tier 3, medium-size
            outlets are the most profitable, and fruits, vegetables and snacks
            sell the most.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} liveLabel="Open live dashboard" />
          <TypographyH3 className="my-4 mt-8">Try it live</TypographyH3>
          <p className="font-mono mb-2">
            The live version runs on this site: pick an outlet tier, size,
            item type or fat content and every KPI and chart recalculates across
            all 8,523 rows, like slicers in Power BI.
          </p>
          <SlideShow images={[`${BASE_PATH}/blinkit/cover.png`]} />
          <TypographyH3 className="my-4 mt-8">The original Power BI report</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/blinkit/powerbi.png`]} />
        </div>
      );
    },
  },
  {
    id: "buy-or-wait",
    category: "AI agent · Hackathon",
    title: "Buy or Wait?",
    src: "/assets/projects-screenshots/buyorwait/cover.png",
    screenshots: ["cover.png"],
    live: "https://github.com/iostream4YOU/hackerrank-orchestrate-buy-or-wait",
    github: "https://github.com/iostream4YOU/hackerrank-orchestrate-buy-or-wait",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.pythonLang, PROJECT_SKILLS.gemini],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Should this user pay now, or wait? Built in 24 hours.
          </TypographyP>
          <TypographyP className="font-mono">
            My HackerRank Orchestrate 2026 entry. LLMs read untrusted messages
            and bill images and turn them into JSON-schema facts. A
            deterministic engine then simulates 86 days of cash flow for 250
            requests in 5 currencies and decides whether each payment is safe.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} liveLabel="Read the solution" />
          <TypographyH3 className="my-4 mt-8">Built not to be fooled</TypographyH3>
          <p className="font-mono mb-2">
            Every model reading is cross-checked by a rule parser or on-device
            OCR. A planted scam instruction inside the data changed no output.
          </p>
          <TypographyH3 className="my-4 mt-8">Measured, not guessed</TypographyH3>
          <p className="font-mono mb-2">
            An evaluation harness with split-half overfitting checks: 24/25 on
            status and 25/25 on payment method, using just 10 batched model
            calls for all 250 requests.
          </p>
          <SlideShow images={[`${BASE_PATH}/buyorwait/cover.png`]} />
        </div>
      );
    },
  },
  {
    id: "codingducks",
    category: "Coding platform",
    title: "Coding Ducks",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://codingducksbyrishi.vercel.app/",
    github: "https://github.com/iostream4YOU/Coding-Ducks-A-Coding-Platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Coding ducks = LeetCode + CodePen + CSS Battles
          </TypographyP>
          <TypographyP className="font-mono ">
            Coding Ducks is your coding dojo — where you level up your skills,
            battle in real-time code duels, and earn badges like a true code
            warrior. Track your progress, flex your brain, and climb the
            leaderboard. Ready to quack the code?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            Solve coding problems similar to LeetCode, enhancing your
            problem-solving skills across various languages.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problems.png`,
              `${BASE_PATH}/codingducks/problem.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
          <p className="font-mono mb-2">
            Collaborate in real-time with others in a multiplayer coding
            environment, just like CodePen but with a social twist.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,
              `${BASE_PATH}/codingducks/ducklet2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

          <p className="font-mono mb-2">
            Challenge yourself to create UI components with HTML/CSS/JS, and get
            instant feedback with an automated similarity scoring.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/css-battles.png`,
              `${BASE_PATH}/codingducks/css-battle.png`,
              `${BASE_PATH}/codingducks/css-battle2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
          <p className="font-mono mb-2">
            Organize or participate in timed coding competitions.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
          <TypographyH3 className="my-4 mt-8">Playground </TypographyH3>
          <p className="font-mono mb-2">
            Test and execute your code instantly in my versatile online code
            runner.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
          <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

          <p className="font-mono mb-2">
            Track your progress, earn badges, and climb the rankings with
            detailed user profiles and activity tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/users.png`,
              `${BASE_PATH}/codingducks/user.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "coderoom",
    category: "Realtime collaboration",
    title: "CodeRoom",
    src: "/assets/projects-screenshots/coderoom/landing.png",
    screenshots: ["landing.png"],
    live: "https://coderoom-alpha.vercel.app/",
    github: "https://github.com/iostream4YOU/coderoom-frontend",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.sockerio],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A shared code editor for pair programming, in the browser
          </TypographyP>
          <TypographyP className="font-mono">
            Generate a room ID, share it, and everyone in the room edits the
            same code in real time over Socket.io, with chat and a shared
            whiteboard for sketching ideas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} liveLabel="Open a room" />
          <TypographyH3 className="my-4 mt-8">How to try it</TypographyH3>
          <p className="font-mono mb-2">
            Click &quot;Generate Unique Room Id&quot;, enter any username and
            join. Open the same room in a second tab to watch edits sync live.
          </p>
          <SlideShow images={[`${BASE_PATH}/coderoom/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "chess-assist-teardown",
    category: "Reverse engineering · Security",
    title: "Chess Assist Teardown",
    src: "/assets/projects-screenshots/chess/cover.png",
    screenshots: ["cover.png"],
    live: "https://github.com/iostream4YOU/chess-assist-teardown",
    github: "https://github.com/iostream4YOU/chess-assist-teardown",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.chrome],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.babel],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Taking apart an obfuscated Chrome extension, line by line
          </TypographyP>
          <TypographyP className="font-mono">
            I wrote a two-pass Babel AST deobfuscator that turned 1.1 MB of
            obfuscated JavaScript into about 9,800 readable lines and renamed
            500+ identifiers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} liveLabel="Read the write-ups" />
          <TypographyH3 className="my-4 mt-8">What I found</TypographyH3>
          <p className="font-mono mb-2">
            I reconstructed the whole system: reading the board from the page on
            4 chess sites, running Stockfish in the tab over UCI, and autoplaying
            through the Chrome DevTools Protocol. The &quot;ELO&quot; setting
            turned out to be just a search-depth knob from 1 to 12.
          </p>
          <TypographyH3 className="my-4 mt-8">8 write-ups</TypographyH3>
          <p className="font-mono mb-2">
            Each write-up documents a security or privacy issue in the extension,
            with the evidence from the deobfuscated code.
          </p>
          <SlideShow images={[`${BASE_PATH}/chess/cover.png`]} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "This Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://rishikeshakkalwar.vercel.app/",
    github: "https://github.com/iostream4YOU/My_portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A Next.js site built on an open-source portfolio template and
            customised with my own content, projects and the live Blinkit
            dashboard that runs entirely in the browser.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/projects.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
