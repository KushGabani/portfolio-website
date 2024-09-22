import { useGetWork } from "@/utils/contentful";
import Link from "next/link";

const Work = async () => {
  const work = await useGetWork();

  return (
    <>
      <div className="gap-y-2">
        <h1 className="text-[2.5rem] font-bold tracking-tight text-[#171717]">
          Archive of work.
        </h1>
        <Link target="_blank" href="https://github.com/kushgabani">
          <span className="text-gray-400 underline hover:text-gray-500">
            View All Archives
          </span>
        </Link>
      </div>
      <div className="flex-grow">
        {work.map((item) => {
          return (
            <div
              key={item.github}
              className="group p-4 first:pt-3 border-b text-lg last:border-b-0"
            >
              <a href={item.github} target="_blank" className="">
                <div className="transition-transform sm:group-hover:translate-x-8 space-y-2">
                  <div>
                    {item.stack.map((tech, i) => (
                      <span
                        key={`${i}_${tech}`}
                        className="text-xs text-gray-400 uppercase mx-3 first:ml-0 last:mr-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span className="text-[#171717] font-medium sm:text-xl transition-all sm:group-hover:text-[1.4rem] text-base">
                      {item.title}
                    </span>
                    <hr className="sm:w-28 w-12 border-[#fd5121]" />
                    <span className="text-gray-600 font-light sm:text-lg text-sm">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Work;
