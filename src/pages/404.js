import * as React from "react";
import { Link } from "gatsby";
import "./../404.scss";
import actions from "../units/KBarAction";
import KBarCommand from "../components/KBarCommand";
import { KBarProvider } from "kbar";

const NotFoundPage = () => {
  const fours = Array(30);
  const ones = Array(30);
  for (let i = 0; i < 30; i++) {
    fours[i] = <span className="particle">4</span>;
    ones[i] = <span className="particle">0</span>;
  }
  return (
    <KBarProvider actions={actions}>
      <KBarCommand />
      <main className="container">
        {fours}
        {ones}
        <article className="content">
          <AnimatedProp />
          <p>
            Page <strong>not found</strong>. Press <strong>Ctrl + K</strong>
          </p>
          <p>
            <Link to={"/"} style={{ textDecoration: "none", color: "#141414" }}>
              <div>Go to Home</div>
            </Link>
          </p>
        </article>
      </main>
    </KBarProvider>
  );
};

export default NotFoundPage;

const AnimatedProp = (props) => (
  <svg height={328.452} width={541.172} {...props}>
    <defs>
      <pattern
        patternUnits="userSpaceOnUse"
        width={1.5}
        height={1}
        patternTransform="scale(10)"
        id="a"
      >
        <path
          style={{
            fill: "#000",
            stroke: "none",
          }}
          d="M0-.5h1v2H0z"
        />
      </pattern>
    </defs>
    <path
      transform="matrix(1.01507 0 0 11.19392 168.756 -2685.706)"
      style={{
        display: "inline",
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: ".1px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M145.059 263.513c-90.204-.1-119.204-.1-119.204-.1"
    />
    <g transform="translate(170.145 .038)" id="g6219">
      <ellipse
        ry={9.162}
        rx={9.306}
        cy={91.329}
        cx={84.964}
        style={{
          display: "inline",
          opacity: 1,
          fill: "none",
          fillOpacity: 0.4627451,
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 1.08691013,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M84.984-.038c.912 0 1.662 18.47 1.675 41.23.007 12.61-.214 23.904-.568 31.47-.283 6.088-.652 9.761-1.059 9.762-.406 0-.782-3.673-1.074-9.761-.362-7.565-.596-18.859-.603-31.47-.012-22.759.718-41.23 1.63-41.231z"
        style={{
          display: "inline",
          fill: "#000",
          stroke: "none",
          strokeWidth: ".23743393px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m85.115 100.573-.01 10.129m.512.182c-1.915-.236-3.506 1.178-4.862 2.682-1.355 1.503-2.473 3.091-3.387 4.595-.915 1.504-1.62 2.916-2.417 4.42-.796 1.503-1.679 3.093-.808 3.24.87.147 3.49-1.148 5.7-1.914s4.001-1 5.922-.868c1.92.134 3.947.633 6.245 1.62 2.298.987 4.861 2.46 4.905.913.044-1.547-2.43-6.114-4.787-9.34-2.357-3.226-4.597-5.111-6.511-5.348z"
        style={{
          display: "inline",
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <rect
        ry={5}
        y={314.841}
        x={35.355}
        height={9.899}
        width={100.763}
        style={{
          display: "inline",
          opacity: 1,
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 1.00157475,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M74.688 125.037c-8.395 7.687-16.791 15.375-23.99 22.385-7.198 7.011-13.197 13.344-18.78 20.01C26.332 174.1 21.167 181.1 18 186.183c-3.167 5.084-4.334 8.25-4.75 11.084-.418 2.834-.084 5.333 1.809 16.253s5.343 30.247 9.76 48.664c4.416 18.416 9.798 35.916 15.18 53.417"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M76.938 124.662c-4.55 6.507-9.291 13.291-13.531 18.698-4.24 5.406-8.073 9.572-11.573 13.99-3.5 4.417-6.667 9.082-9.334 14-2.667 4.917-4.833 10.082-6.333 15.083-1.5 5-2.333 9.832-2.5 14.333-.167 4.5.333 8.666 1.25 15.5.916 6.835 2.25 16.333 3.5 24.917 1.25 8.583 2.416 16.25 4.583 28.584 2.167 12.334 5.333 29.332 8.5 46.333M96.813 126.225c6.895 6.458 13.791 12.917 19.99 19.146C123 151.6 128.5 157.6 133.916 163.767c5.416 6.166 10.75 12.5 14.75 17.916 4 5.417 6.666 9.917 7.166 17.833.5 7.917-1.166 19.25-3.35 31.247-2.184 11.996-4.816 24.336-8.42 38.998-3.605 14.661-8.063 31.171-12.563 47.839"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M91.938 124.1c5.854 7.167 11.708 14.333 16.218 20.166 4.51 5.834 7.677 10.334 11.927 16.334s9.584 13.5 12.667 18.583c3.083 5.083 3.916 7.75 4.682 10.914.765 3.164 1.401 6.502 1.698 8.024.296 1.521.223 1.066.149.609M89 123.662c6.16 11.518 12.32 23.036 16.837 31.79 4.518 8.753 7.3 14.55 9.244 18.32 1.945 3.772 3.006 5.422 4.184 9.193 1.179 3.772 2.475 9.663 1.945 23.807-.53 14.143-2.887 36.532-5.421 56.45-2.534 19.917-5.244 37.358-7.955 54.8"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M87.063 123.037c2.916 10.43 5.833 20.86 7.291 26.664 1.459 5.804 1.459 6.983 2.402 11.11.944 4.129 2.828 11.194 4.065 16.026 1.238 4.832 1.827 7.424 2.122 10.842.295 3.418.295 7.66-.118 20.45-.413 12.788-1.237 34.114-2.18 53.62-.943 19.504-2.004 37.18-3.064 54.86M85.206 122.983c.118 11.743.236 23.488.236 36.55 0 13.063-.118 27.438-.059 45.352.06 17.915.295 39.362.707 58.808.413 19.446 1.002 36.887 1.591 54.33M83.13 122.92c-2.602 10.561-5.215 21.173-7.403 31.417-2.188 10.244-3.955 20.142-5.075 26.035-1.12 5.892-1.59 7.778-1.886 10.077-.295 2.299-.412 5.008 0 17.563.413 12.556 1.355 34.939 2.475 54.742 1.12 19.804 2.416 37.001 3.712 54.208"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M79.255 124.233c-5.44 11.562-10.881 23.126-15.9 33.563-5.019 10.438-9.614 19.747-11.913 26.7-2.298 6.954-2.298 11.55-1.355 24.575.943 13.025 2.828 34.469 5.066 53.847 2.238 19.379 4.833 36.72 7.426 54.044"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M42.426 155.388c3.419.825 6.836 1.65 10.607 2.18 3.771.53 7.897.767 11.609.884 3.712.118 7.012.118 10.43.06 3.417-.06 6.953-.178 10.606-.236 3.653-.06 7.425-.06 11.137-.236 3.712-.177 7.366-.53 10.725-.707 3.358-.177 6.423-.177 9.487-.59 3.063-.412 6.129-1.237 9.192-2.062"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m13.113 198.168 142.638 1.211"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: "1.00614154px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M132.688 263.35c-4.23 18.415-8.459 36.832-12.688 55.25"
        style={{
          display: "inline",
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <ellipse
        ry={4.672}
        rx={2.5}
        cy={238.085}
        cx={119.123}
        style={{
          display: "inline",
          opacity: 1,
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 1.00157475,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <ellipse
        ry={4.316}
        rx={4.9}
        cy={4.395}
        cx={85.016}
        style={{
          display: "inline",
          opacity: 1,
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 0.82170224,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <ellipse
        transform="translate(-170.145 -.038)"
        ry={3.881}
        rx={3.578}
        cy={164.571}
        cx={321.422}
        style={{
          opacity: 1,
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 1.00157475,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        transform="translate(-170.145 -.038)"
        d="M321.744 168.069c0 3.391-3.425 11.267-8.739 11.267-5.314 0-18.594 27.246-8.385 3.759 1.352-3.11 5.696-12.9 10.507-15.156 8.055-3.78 6.617-3.262 6.617.13z"
        style={{
          opacity: 1,
          fill: "#000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000",
          strokeWidth: 1.00157475,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        transform="translate(-170.145 -.038)"
        d="M325 163.452c1.667.626 3.334 1.252 3.334 1.564 0 .313-1.666.313-3.334.313M314.721 177.37c-.215 1.641-.43 3.282.285 3.964.714.681 2.354.4 3.994.118"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        transform="translate(-170.145 -.038)"
        d="M316 176.452c-.296 1.41-.592 2.82-.258 3.487.334.668 1.296.59 2.258.513M318 180.452c.667 0 1.334 0 1.501.166.167.166-.167.5.001.667.168.167.688.167.89.37.203.201-.058.463-.392.797"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m155 199.6 34.151 6.523v11.49l-1.06 13.436-3.89 19.445-3.005 10.43-4.066 12.198-17.147-4.95-14.924-4.659L155 199.6"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="m172.534 202.941-2.652 33.234-3.535 16.97-5.127 15.734"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        d="M187.266 239.003c.767-.825 2.122-2.004 3.506-2.269 1.384-.264 2.799.384 3.24 1.532.443 1.148-.088 2.799-1.561 3.241-1.474.443-3.889-.323-3.8.001.089.324 2.68 1.738 4.006 3.122s1.385 2.74.796 3.389c-.59.648-1.826.59-2.534.117-.708-.472-.884-1.355-1.59-2.65-.707-1.296-1.946-3.006-2.476-4.097-.53-1.09-.353-1.562.413-2.387z"
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g
      style={{
        fill: "url(#a)",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 1.23488784,
      }}
      transform="matrix(.97169 0 0 1.02914 170.145 .038)"
      aria-label={4}
    >
      <path
        style={{
          fill: "url(#a)",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 1.23488784,
          strokeOpacity: 1,
        }}
        d="M-.465 256.59h-25.701v43.53H-67.38v-43.53h-75.83l-9.957-15.28 64.137-140.084h8.915l33.573 15.861-48.508 89.607-11.46 19.565h39.13l4.399-43.067h36.815v43.067H-.465z"
      />
    </g>
    <g
      style={{
        fill: "url(#a)",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 1.23488784,
      }}
      transform="matrix(.97169 0 0 1.02914 377.956 103.293)"
      aria-label={4}
    >
      <path
        style={{
          fill: "url(#a)",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 1.23488784,
          strokeOpacity: 1,
        }}
        d="M147.556 156.336h-25.701v43.53H80.64v-43.53H4.81l-9.956-15.282L58.991.972h8.915l33.573 15.86-48.508 89.607-11.461 19.565h39.13l4.4-43.067h36.815v43.067h25.7z"
      />
    </g>
  </svg>
);
