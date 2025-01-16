import React from 'react'

const Logo = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 2L2 10L16 18L30 10L16 2Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M16 18L2 10V22L16 30L30 22V10L16 18Z"
        fill="url(#paint1_linear)"
        fillOpacity="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="2"
          y1="10"
          x2="30"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FACC15" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="2"
          y1="20"
          x2="30"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FACC15" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo

