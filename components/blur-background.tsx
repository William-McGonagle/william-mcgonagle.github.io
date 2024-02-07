import React, { ReactElement } from "react";

export function BlurBackground({
  children,
  className,
  colors,
}: {
  children?: React.ReactNode;
  className?: string;
  colors?: string[];
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute left-0 right-0 top-0 bottom-0 z-10"
      >
        <defs>
          <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="161"
              result="effect1_foregroundBlur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <rect width="900" height="600" fill={colors?.[0] || "#6600FF"}></rect>
        <g filter="url(#blur1)">
          {colors?.map((i, n) => {
            return (
              <>
                <circle
                  cx={Math.floor(Math.random() * 900)}
                  cy={Math.floor(Math.random() * 600)}
                  fill={i}
                  r={Math.floor(Math.random() * 300 + 20)}
                ></circle>
                <circle
                  cx={Math.floor(Math.random() * 900)}
                  cy={Math.floor(Math.random() * 600)}
                  fill={i}
                  r={Math.floor(Math.random() * 300 + 20)}
                ></circle>
                <circle
                  cx={Math.floor(Math.random() * 900)}
                  cy={Math.floor(Math.random() * 600)}
                  fill={i}
                  r={Math.floor(Math.random() * 300 + 20)}
                ></circle>
              </>
            );
          })}
          {/* <circle cx="695" cy="470" fill="#6600FF" r="357"></circle>
          <circle cx="167" cy="257" fill="#00CC99" r="357"></circle>
          <circle cx="882" cy="444" fill="#00CC99" r="357"></circle>
          <circle cx="599" cy="197" fill="#6600FF" r="357"></circle>
          <circle cx="474" cy="404" fill="#00CC99" r="357"></circle> */}
        </g>
      </svg>
      <div className="absolute left-0 top-0 bottom-0 right-0 z-20">
        {children}
      </div>
    </div>
  );
}
