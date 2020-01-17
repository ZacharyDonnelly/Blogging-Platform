import React from "react";

const HomepageSvgComponent = props => {
  return (
    <svg data-name="Layer 1" viewBox="0 0 300 200" {...props}>
      <defs>
        <radialGradient
          id="prefix__a"
          cx={128.13}
          cy={106.18}
          r={5.25}
          gradientTransform="rotate(-59.18 107.379 73.935)"
          gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.09} stopColor="#ffedd8" />
          <stop offset={0.21} stopColor="#ffd5a7" />
          <stop offset={0.33} stopColor="#ffc17d" />
          <stop offset={0.46} stopColor="#ffb05b" />
          <stop offset={0.59} stopColor="#ffa340" />
          <stop offset={0.72} stopColor="#ff9a2d" />
          <stop offset={0.86} stopColor="#ff9522" />
          <stop offset={1} stopColor="#ff931e" />
        </radialGradient>
        <radialGradient
          id="prefix__b"
          cx={97.18}
          cy={106.18}
          r={5.25}
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__c"
          cx={113.39}
          cy={116.3}
          r={34.73}
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__d"
          cx={113.31}
          cy={135.68}
          r={5.25}
          xlinkHref="#prefix__a"
        />
      </defs>
      <title>{"Artboard 1"}</title>
      <circle cx={145.7} cy={72.65} r={5.25} fill="url(#prefix__a)" />
      <circle cx={129.85} cy={99.23} r={5.25} fill="url(#prefix__b)" />
      <path
        d="M164.66 58.87a5.23 5.23 0 012 6.85 2.37 2.37 0 01-.19.35 5.26 5.26 0 01-1.28 1.45c-.14.2-.27.4-.4.62a12.81 12.81 0 004.43 17.56 12.63 12.63 0 007 1.79 5.15 5.15 0 012.37-.31 5.25 5.25 0 11-5.23 7.51 5.48 5.48 0 01-.23-.56 12.67 12.67 0 00-5.12-5.8 13.14 13.14 0 00-3.23-1.36 3.58 3.58 0 00-.35-.09 12.8 12.8 0 00-6.59 24.74c.21.06.41.11.62.15a3.15 3.15 0 01.36.09 12.58 12.58 0 002.92.25 1.54 1.54 0 01.26-.11 5.52 5.52 0 011.46-.19 3.59 3.59 0 01.47 0 5.4 5.4 0 012.12.72 5.25 5.25 0 11-5.38 9 5.17 5.17 0 01-1.56-1.45l-.44-.71c-.11-.33-.23-.65-.37-1a4.4 4.4 0 01-.14-.65 12.52 12.52 0 00-4.47-4.86 5.28 5.28 0 00-.56-.35l-.32-.18a12.79 12.79 0 00-17.17 4.67l-.24.44a5.24 5.24 0 01-.7 2 4.46 4.46 0 01-.35.5 5.24 5.24 0 11-5.35-8.34 5.09 5.09 0 012.36 0 12.8 12.8 0 10-12.06-19.43 8 8 0 01-.92 1.79 5.25 5.25 0 11-4.4-8.49 5.28 5.28 0 012.39.46 12.81 12.81 0 0011.68-20 5 5 0 01-1.19-1.49 5.24 5.24 0 017.32-7 5.24 5.24 0 012.25 6.28 9.92 9.92 0 01-1.43 2.16 12.8 12.8 0 1022.89.8A4.85 4.85 0 01157 65a5.18 5.18 0 01.46-4.31 5.26 5.26 0 017.2-1.82z"
        fill="url(#prefix__c)"
      />
      <path
        d="M166.12 96a5.25 5.25 0 11-7.19 1.82 5.26 5.26 0 017.19-1.82z"
        fill="url(#prefix__d)"
      />
    </svg>
  );
};

export default HomepageSvgComponent;
