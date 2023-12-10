import { ReactNode } from "react"

export type ChildrenComponentProps = {
  children: ReactNode
}

export type ComponenetBuilderComponentProps = {
  component: ReactNode
  code: string
  title: string
  id: string
}

export type ComponentStateComponenetProps = {
  state: string
  setState: (state: string) => void
}

export type PreviewComponentProps = {
  state: string
  component: ReactNode
}

export type CodeComponentProps = {
  state: string
  code: string
}

export type ComponenetBannerProps = {
  mode: "dark" | "light"
}