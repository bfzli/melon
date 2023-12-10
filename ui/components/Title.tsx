import { FC, ReactNode } from "react"
import { ComponenetBuilderComponentProps } from "@/ts"

const Title: FC<ComponenetBuilderComponentProps> = (props): ReactNode => {
  const { title } = props
  
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-gray-200">{title}</h1>

      <p className=" text-gray-500 text-xs w-[60%]">
        Note: We haven&apost added any default organizations for donations, It
        is your responsibility to find and ensure the accuracy of organizations
        that does aid for Palestine.
      </p>
    </div>
  )
}

export default Title