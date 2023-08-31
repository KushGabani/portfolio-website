"use client";

import { useEffect } from "react";
// @ts-ignore
import { getCalApi } from "@calcom/embed-react";

type Props = {
  className?: string;
};

const CalcomButton = ({ className }: Props) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#ff5b2e" },
        },
      });
    })();
  }, []);

  return (
    <button
      data-cal-link="kushgabani/30min"
      className={`bg-[#fd5121] hover:bg-[#ff5b2e] border-2 border-white focus:outline-dashed focus:outline-[#ff4117] shadow-sm text-white ${className}`}
    >
      Let's Talk
    </button>
  );
};

export default CalcomButton;
