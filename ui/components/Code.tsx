import { FC, ReactNode } from "react"
import { CodeComponentProps } from "@/ts"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const styles = {
    height: "400px",
    marginTop: "0",
    borderRadius: "0.75rem",
    border: "1px solid #2D323B",
}

const Code: FC<CodeComponentProps> = (props): ReactNode => {
const { state, code } = props

  if (state === "code") return (
      <SyntaxHighlighter
        language="html"
        style={atomDark}
        customStyle={styles}
      >
        {code}
      </SyntaxHighlighter>
    )
}

export default Code