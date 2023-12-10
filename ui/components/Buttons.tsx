import { FC, ReactNode } from "react"
import { ComponentStateComponenetProps } from "@/ts"
import { EyeIcon, CodeIcon } from "@/ui/icons"

const Buttons: FC<ComponentStateComponenetProps> = (props): ReactNode => {
    const { state, setState } = props

    return (
        <div className="bg-[#2D323B] p-1 lg:flex gap-2 items-center ml-6 rounded-xl ring-1 ring-gray-900/5 shadow-sm dark:shadow-highlight/4">
            <button onClick={() => setState("preview")} className={`group flex items-center py-2 px-3 focus:outline-none focus-visible:ring-2 rounded-xl focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400 ${state ==='preview' ? 'bg-[#ffffff10]' : 'transition -all ease-in-out duration-500 hover:bg-[#ffffff05]'}`}>
                <EyeIcon />

                <span className="ml-2 text-white text-[13.5px]">
                    Preview
                </span>
            </button>

            <button onClick={() => setState("code")} className={`group flex items-center py-2 px-3 focus:outline-none focus-visible:ring-2 rounded-xl focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400 ${state === 'code' ? 'bg-[#ffffff10]' : 'transition -all ease-in-out duration-500 hover:bg-[#ffffff05]'}`}>
                <CodeIcon />

                <span className="ml-2 text-white text-[13.5px]">
                    Code
                </span>
            </button>
        </div>
    )
}

export default Buttons