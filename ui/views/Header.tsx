import { FC, ReactNode } from "react"

const Header: FC = (): ReactNode => {
  return (
    <div className="bg-[#222730] px-[20%]  py-16 relative pb-28 items-center mb-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto items-center flex flex-col justify-center">
        {/* eslint-disable @next/next/no-img-element */}
        <img
            alt="Palestine Support Image Icon"
            src="/support.png" 
            width={124} 
            height={124} 
        />

        <h1 className="text-5xl mt-4 font-display lg:text-6xl self-center flex font-semibold leading-snug text-primary text-white">
          Stand with Palestine
        </h1>

        <p className="text-xl text-gray-300 mt-1 font-display max-w-lg md:max-w-full py-1 text-center text-secondary leading-snug self-center">
          This mini application offers a selection of banners that can be utilized on your website to display support for Palestine and advocate for fundamental human rights.
        </p>

        <div className="flex">
          <a
            className="ease-in-out duration-500 w-full mr-4 border-gray-500 mt-4 border sm:w-auto text-white justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 leading-snug text-primary shadow-secondary-button-stroke hover:bg-gray-40/5 active:bg-gray-40/10 text-lg py-3 rounded-full px-4 sm:px-6"
            aria-label="API Reference"
            href="#simple-banner-with-flag-white"
          >
            Explore Banners{" "}
            <span className="ml-2" aria-hidden="true">
              &darr;
            </span>
          </a>

          <a
            className="ease-in-out duration-500 w-full border-gray-500 mt-4 border sm:w-auto text-white justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 leading-snug text-primary shadow-secondary-button-stroke hover:bg-gray-40/5 active:bg-gray-40/10 text-lg py-3 rounded-full px-4 sm:px-6"
            aria-label="API Reference"
            href="https://github.com/bfzli/melon"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="bg-[#1C1E26] w-full absolute right-0 left-0 bottom-0 h-10 rounded-t-[100px]" />
    </div>
  )
}

export default Header