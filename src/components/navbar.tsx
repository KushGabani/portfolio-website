import CalcomButton from "@/components/calcom_button";
import Link from "next/link";

const Navbar = () => {
  const tabs = ["Home", "About", "Work", "Contact"].map((e) => (
    <div className="hover:bg-gray-100 cursor-pointer rounded-lg px-3 py-[0.35rem]">
      {e}
    </div>
  ));

  return (
    <nav className="sticky top-0 md:border-b border-neutral-100 bg-white shadow-sm">
      <div className="mx-auto w-full h-[52px] bg-white px-2 max-w-6xl grid md:grid-cols-3 grid-cols-2 grid-flow-col place-content-center">
        <Link href="/">
          <span className="w-fit h-full items-center flex flex-none text-lg font-semibold tracking-tight">
            K<span className="underline">G</span>
          </span>
        </Link>
        <div className="md:flex hidden sm:items-center sm:justify-center gap-x-4 text-sm font-medium tracking-tight">
          {tabs}
        </div>
        <div className="w-fit flex items-center gap-x-4 justify-self-end">
          <button className="px-4 py-[0.35rem] text-[0.8rem] font-medium bg-white hover:bg-[#f9f9f9] border hover:border-gray-300 focus:outline-dashed shadow-sm rounded-lg">
            See Resume
          </button>
          <CalcomButton className="py-[0.35rem] px-4 !text-[0.8rem] rounded-lg" />
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center gap-x-2 text-sm font-medium tracking-tight">
        {tabs}
      </div>
    </nav>
  );
};

export default Navbar;
