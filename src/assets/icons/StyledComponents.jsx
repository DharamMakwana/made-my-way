import * as React from "react"

const SvgComponent = (props) => (
  <svg
    viewBox="0 0 318 318"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={25}
    height={25}
    {...props}
  >
    <defs>
      <path id="a" d="M0 0h318v318H0z" />
      <mask id="b" fill="#fff" height={318} width={318} x={0} y={0}>
        <use xlinkHref="#a" />
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd">
      
      <text
        fill="#000"
        fontFamily="AppleColorEmoji, Apple Color Emoji"
        fontSize={200}
      >
        <tspan x={50} y={220}>
          {"\uD83D\uDC85"}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgComponent
