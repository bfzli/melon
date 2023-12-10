import { FC } from "react"
import { ComponenetBannerProps } from "@/ts"
import { NormalFlagIcon } from "@/ui/icons"

const SimpleBanner: FC<ComponenetBannerProps> = (props) => {
  const { mode } = props
  
  if(mode === 'light') return (
    <div className="relative isolate flex rounded-t-xl items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <NormalFlagIcon />

        <p className="text-sm leading-6 text-gray-900 font-medium">
          We stand with Palestine and human rights. Help Provide Humanitarin Aid
          to Palestine.
        </p>

        <a href="#" target="_blank" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm  text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all ease-in-out duration-500">
          Donate 
          
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="flex flex-1 justify-end -m-3 p-3">
        <button type="button" className="focus-visible:outline-offset-[-4px] p-.5 hover:bg-[#00000010] rounded-full transition-all ease-in-out duration-500">
          <svg
            className="h-5 w-5 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )

  else return (
    <div className="relative isolate flex rounded-t-xl items-center gap-x-6 overflow-hidden bg-gray-700 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <NormalFlagIcon />

        <p className="text-sm leading-6 text-gray-300 font-medium">
          We stand with Palestine and human rights. Help Provide Humanitarin Aid
          to Palestine.
        </p>

        <a href="#" target="_blank" className="flex-none rounded-full bg-gray-100 px-3.5 py-1 text-sm  text-gray-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all ease-in-out duration-500">
          Donate 
          
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="flex flex-1 justify-end -m-3 p-3">
        <button type="button" className="focus-visible:outline-offset-[-4px] p-.5 hover:bg-[#ffffff10] rounded-full transition-all ease-in-out duration-500">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SimpleBanner