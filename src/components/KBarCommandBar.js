import React from "react";

import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import { colors } from "../Colors";

const KBarCommandBar = () => {
  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator style={animatorStyle}>
          <KBarSearch style={searchStyle} />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        style={{
          padding: "0.5rem 1rem",
          background: active ? a1 : "transparent",
          borderLeft: `3px solid ${active ? colors.orange : "transparent"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: 14,
            fontFamily: "worksans_regular",
          }}
        >
          {action.icon && action.icon}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "0.3rem",
            }}
          >
            <div style={{ color: "black" }}>
              <span style={{ fontSize: 16 }}>{action.name}</span>
            </div>
            {action.subtitle && (
              <span style={{ fontSize: 12, paddingTop: "3px", opacity: "0.7" }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  color: "black",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

const background = "white";
const foreground = colors.black;
const a1 = "rgba(224,222,222,0.7)";
const shadow = "5px 5px 20px 15px rgba(0, 0, 0, 0.5)";

const searchStyle = {
  padding: "1rem",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  background: background,
  color: foreground,
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: background,
  color: foreground,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: shadow,
  paddingBottom: "0.1rem",
};

const groupNameStyle = {
  padding: "0.5rem 1rem",
  fontSize: "11px",
  color: "black",
  textTransform: "uppercase",
  opacity: 0.6,
};

export default KBarCommandBar;

// KBar Logo SVG

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
//   <defs></defs>
//   <rect
//     x="274.84"
//     y="291.68"
//     width="494.68"
//     height="494.68"
//     rx="82.35"
//     transform="rotate(-21 522.198 539.01)"
//     style="fill: var(--background); stroke: var(--foreground); stroke-width: 13px;"
//   ></rect>
//   <rect
//     x="299.84"
//     y="304.68"
//     width="494.68"
//     height="494.68"
//     rx="82.35"
//     transform="rotate(-14 547.172 552.01)"
//     style="fill: var(--background); stroke: var(--foreground); stroke-width: 13px;"
//   ></rect>
//   <rect
//     x="323.84"
//     y="320.68"
//     width="494.68"
//     height="494.68"
//     rx="82.35"
//     transform="rotate(-7 571.152 568.045)"
//     style="fill: var(--background); stroke: var(--foreground); stroke-width: 13px;"
//   ></rect>
//   <rect
//     x="344.82"
//     y="339.66"
//     width="494.68"
//     height="494.68"
//     rx="82.35"
//     style="fill: var(--background); stroke: var(--foreground); stroke-width: 13px;"
//   ></rect>
//   <path
//     d="M550.26 545.09h83.81v83.81h-83.81zM550.26 509.88v35.21H515a35.22 35.22 0 1 1 35.22-35.21ZM550.26 664.12v-35.21H515a35.22 35.22 0 1 0 35.22 35.21ZM634.07 509.88v35.21h35.21a35.22 35.22 0 1 0-35.21-35.21ZM634.07 664.12v-35.21h35.21a35.22 35.22 0 1 1-35.21 35.21Z"
//     style="fill: var(--background); stroke: var(--foreground); stroke-width: 13px;"
//   ></path>
// </svg>;
