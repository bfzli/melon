import { FC, ReactNode } from "react"
import { ComponenetBannerProps } from "@/ts"
import { WavingFlagIcon } from "@/ui/icons"

const FlatBanner: FC<ComponenetBannerProps> = (props): ReactNode => {
  const { mode } = props

  if(mode === 'dark') return (
    <div className="absolute rounded-t-xl top-0 start-0 z-50 flex justify-between w-full p-4 border-b bg-gray-700 border-gray-600">
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-400">
          <WavingFlagIcon />

          <span className="ml-2">
            We stand with Palestine and human rights. Help Provide Humanitarin
            Aid to Palestine.{" "}
            
            <a target="_blank" href="#" className="inline font-medium text-blue-500 underline hover:text-blue-400 decoration-600 decoration-solid transition-all ease-in-out duration-500">
              Donate
            </a>
          </span>
        </p>
      </div>
      
      <div className="flex items-center">
        <button className="flex-shrink-0 inline-flex justify-center w-5 h-5 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 transition-all duration-500 ease-in-out">
          <svg
            className="w-2.5 h-2.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  )

  else return (
      <div className="absolute rounded-t-xl top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500">
            <WavingFlagIcon />
  
            <span className="ml-2">
              We stand with Palestine and human rights. Help Provide Humanitarin
              Aid to Palestine.{" "}
              
              <a target="_blank" href="#" className="inline font-medium text-blue-600 underline hover:text-blue-500 decoration-600 decoration-solid transition-all ease-in-out duration-500">
                Donate
              </a>
            </span>
          </p>
        </div>
        
        <div className="flex items-center">
          <button className="flex-shrink-0 inline-flex justify-center w-5 h-5 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 transition-all duration-500 ease-in-out">
            <svg
              className="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
  )
}

export default FlatBanner