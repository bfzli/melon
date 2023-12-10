import { FC, ReactNode } from "react"
import { PreviewComponentProps } from "@/ts"

const Preview: FC<PreviewComponentProps> = (props): ReactNode => {
    const { state, component } = props

    if (state === "preview") return (
      <div className="border bg-[#17181D] relative border-[#2D323B] rounded-xl min-h-[400px] max-h-[400px]">
        {component}
      </div>
    )
}

export default Preview