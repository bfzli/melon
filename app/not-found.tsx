"use client"

import { FC, Fragment, ReactNode } from "react"
import { Component } from "@/ui/views"
import { Banners } from "@/lists"
import { ComponenetBuilderComponentProps } from "@/ts"

const Home: FC = (): ReactNode => {
  return (
    <Fragment>
        <main className="max-w-7xl mx-auto flex flex-col gap-20">
          {
            Banners.map((banner: ComponenetBuilderComponentProps) => (
              <Fragment key={banner.id}>
                <Component
                  id={banner.id}
                  title={banner.title}
                  component={banner.component}
                  code={banner.code}
                />
              </Fragment>
            ))
          }
      </main>

      <p className="text-md py-14 mb- text-gray-400 font-display max-w-lg md:max-w-full text-center text-secondary leading-snug self-center">
        End of Banners. If you are a developer you can contribute to this project by adding more banners on GitHub repository.
      </p>
    </Fragment>
  )
}

export default Home