interface TransferIconProps {
  variant?: "green" | "white";
}

export const TransferIcon = ({ variant = "green" }: TransferIconProps) => {
  const isGreen = variant === "green";
  const circleFill = isGreen ? "#17554C" : "#FCFCFC";
  const strokeColor = isGreen ? "#FCFCFC" : "#2E2E2E";
  const clipId = isGreen ? "clip_green" : "clip_white";

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill={circleFill} />
      <g clipPath={`url(#${clipId}_0)`}>
        <g clipPath={`url(#${clipId}_1)`}>
          <path
            d="M36.2855 15.0957V25.4601H31.1033V20.2779H18.6529V25.4601H13.4707V15.0957H36.2855Z"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M18.6523 20.2783H31.1027"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M31.0918 20.2783H18.6523V37.9109H31.0918V20.2783Z"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M24.8786 29.6098C26.5947 29.6098 27.9858 28.2187 27.9858 26.5027C27.9858 24.7866 26.5947 23.3955 24.8786 23.3955C23.1626 23.3955 21.7715 24.7866 21.7715 26.5027C21.7715 28.2187 23.1626 29.6098 24.8786 29.6098Z"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M16.5781 20.2783H33.1786"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            d="M24.8789 31.6855V34.8036"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${clipId}_0`}>
          <rect
            width="26.6667"
            height="26.6667"
            fill="white"
            transform="translate(11.25 13.4346)"
          />
        </clipPath>
        <clipPath id={`${clipId}_1`}>
          <rect
            width="26.0741"
            height="26.0741"
            fill="white"
            transform="translate(11.8418 13.4658)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
