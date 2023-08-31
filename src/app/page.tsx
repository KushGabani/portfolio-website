import CalcomButton from "@/components/calcom_button";
import Navbar from "@/components/navbar";
import Link from "next/link";
import NextjsIcon from "@/icons/nextjs";
import NodejsIcon from "@/icons/nodejs";
import TailwindIcon from "@/icons/tailwind";
import ReduxIcon from "@/icons/redux";
import PythonIcon from "@/icons/python";
import FlutterIcon from "@/icons/flutter";
import FigmaIcon from "@/icons/figma";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Work from "@/components/work";

export default async function Home() {
  return (
    <div className="relative flex flex-1 flex-col min-h-screen mb-12">
      <Navbar />
      <main className="overflow-hidden space-y-28">
        <section className="dashed-grid h-[95vh]">
          <div className="mx-auto w-full h-full flex flex-col justify-center max-w-6xl py-8 px-4 xl:px-0 space-y-6 sm:space-y-12">
            <div className="w-fit">
              <a href="https://alter.typedream.app" target="_blank">
                <div className="flex items-center text-xs gap-x-3 rounded-full bg-white border hover:shadow-md transition-shadow border-neutral-200 p-3 shadow-sm w-fit text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  <span>Visit Alter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-[#171717] lg:text-[4.75rem] md:leading-[1.15]">
              From algorithms to pixels, <br />I seek growth in every endeavor.
            </h1>
            <p className="text-xs sm:text-base text-neutral-400">
              Hello world! I am
              <span className="text-gray-600 font-medium"> Kush Gabani</span> —
              a full stack engineer and a deep learning enthusiast <br />
              weaving lines of code with a drive to craft seamless digital
              experiences.
            </p>

            <div className="space-y-4">
              <CalcomButton className="py-4 px-12 rounded-xl" />

              <p className="text-[0.8rem] text-gray-400">
                Too busy for a meeting?{" "}
                <Link href="mailto:kushgabz2687@gmail.com">
                  <span className="text-gray-700 underline hover:text-black">
                    Leave me a message
                  </span>
                </Link>
              </p>
            </div>

            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-x-4 w-fit">
              <a
                href="https://github.com/kushgabani"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <GitHubLogoIcon width={20} height={20} />
              </a>
              <a
                href="https://linkedin.com/in/kushgabani"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <LinkedInLogoIcon width={20} height={20} />
              </a>
              <a
                href="mailto:kushgabz2687@gmail.com"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="mx-auto flex flex-col items-center gap-y-4 w-full max-w-6xl px-0 lg:px-8 xl:p-0">
          <div className="px-4 py-2 text-sm rounded-full text-white bg-[#171717] w-fit">
            {"TECH I'M FLUENT IN"}
          </div>
          <div className="w-full overflow-hidden border bg-gray-100 border-l-0 border-r-0 border-neutral-200/50 shadow-sm lg:rounded-2xl lg:border-l lg:border-r">
            <div className="grid grid-cols-2 cursor-pointer gap-px md:grid-cols-4">
              <div
                className={
                  "bg-white hover:bg-[#111111] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <NextjsIcon />
                <span className="font-medium text-lg">Next.js</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#3178c6] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <span className="text-2xl font-bold">TS</span>
                <span className="font-medium text-lg">TypeScript</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#83CD29] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <NodejsIcon />
                <span className="font-medium text-lg">Node.js</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#38bdf8] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <TailwindIcon />
                <span className="font-medium text-lg">Tailwind CSS</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#764ABC] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <ReduxIcon />
                <span className="font-medium text-lg">Redux</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#FFC331] h-[100px] flex items-center justify-center gap-x-2 hover:text-white transition-colors"
                }
              >
                <PythonIcon />
                <span className="font-medium text-lg">Python</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#45caf7] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <FlutterIcon />
                <span className="font-medium text-lg">Flutter</span>
              </div>
              <div
                className={
                  "bg-white hover:bg-[#A259FF] h-[100px] flex items-center justify-center gap-x-4 hover:text-white transition-colors"
                }
              >
                <FigmaIcon />
                <span className="font-medium text-lg">Figma</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto md:space-x-12 space-y-6 md:space-y-0 md:flex md:items-start w-full max-w-6xl px-4 lg:px-8 xl:p-0">
          <Work />
        </section>
      </main>
    </div>
  );
}
