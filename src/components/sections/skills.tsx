import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base text-center text-neutral-300">
          (hint: press a key)
        </p>
        <p className="mx-auto mt-6 max-w-3xl px-4 text-center text-sm md:text-base text-neutral-600 dark:text-neutral-300 font-sans">
          Python · FastAPI · SQL · JavaScript/TypeScript · React · Node.js ·
          Docker · GitHub Actions · LangChain · LangGraph · CrewAI · TensorFlow ·
          Keras · Pandas · Power BI · Selenium · Firestore · MongoDB
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
