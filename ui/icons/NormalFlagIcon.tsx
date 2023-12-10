import { FC, ReactNode } from "react"

const NormalFlagIcon: FC = (): ReactNode => {
  return (
    <svg
      width="26"
      viewBox="0 0 53 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_259_6555)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.00195312 0H53.0007V13.3359H-0.00195312V0Z"
          fill="black"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.00195312 13.3359H53.0007V26.6641H-0.00195312V13.3359Z"
          fill="white"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.00195312 26.6641H53.0007V40H-0.00195312V26.6641Z"
          fill="#009900"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.00195312 40L29.8105 20L-0.00195312 0V40Z"
          fill="#FF0000"
        />
      </g>

      <defs>
        <clipPath id="clip0_259_6555">
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H49C51.2091 0 53 1.79086 53 4V36C53 38.2091 51.2091 40 49 40H4C1.79086 40 0 38.2091 0 36V4Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default NormalFlagIcon