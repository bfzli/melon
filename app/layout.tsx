import "@/ui/styles/tailwind.css"
import "@/ui/styles/globals.css"

import { FC, ReactNode } from "react"
import { Metadata } from "next"
import { ChildrenComponentProps } from "@/ts"
import { DM_Sans } from "next/font/google"
import { Header } from "@/ui/views"

const sans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stand with Palestine Html & Tailwind Banners",
  description: "This mini application offers a selection of banners that can be utilized on your website to display support for Palestine and advocate for fundamental human rights.",
}

const RootLayout: FC<ChildrenComponentProps> = (props): ReactNode => {
  const { children } = props
  return (
    <html lang="en">
      <body className={sans.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}

export default RootLayout