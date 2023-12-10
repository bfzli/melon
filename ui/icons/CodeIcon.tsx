import { FC, ReactNode } from "react"

const CodeIcon: FC = (): ReactNode =>  {
  return (
    <svg
      className="h-5 w-5 flex-none stroke-white"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25" />
    </svg>
  )
}

export default CodeIcon