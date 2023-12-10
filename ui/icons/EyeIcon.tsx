import { FC, ReactNode } from "react"

const EyeIcon: FC = (): ReactNode => {
  return (
    <svg
      className="h-5 w-5 flex-none stroke-white"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z" />
      <circle cx="10" cy="10" r="2.25" />
    </svg>
  )
}

export default EyeIcon