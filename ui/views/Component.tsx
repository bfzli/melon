"use client"

import { FC, ReactNode, useState } from "react"
import { ComponenetBuilderComponentProps } from "@/ts"
import { Buttons, Code, Preview, Title } from "@/ui/components"

const Component: FC<ComponenetBuilderComponentProps> = (props): ReactNode => {
  const { id } = props
  const [state, setState] = useState("preview")

  return (
    <section id={id} className="w-full p-4 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <Title {...props} />
        
        <Buttons 
          state={state} 
          setState={setState}  
        />
      </div>

      <Preview state={state} {...props} />
      <Code state={state} {...props} />
    </section>
  )
}

export default Component