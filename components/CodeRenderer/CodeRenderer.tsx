import React, { FunctionComponent } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

interface CodeProps {
  language?: string
  showLineNumbers?: boolean
  value?: string
}

export const CodeRenderer: FunctionComponent<CodeProps> = ({
  children,
  language,
  showLineNumbers,
  value,
}) => {
  return (
    <SyntaxHighlighter
      language={language || "typescript"}
      style={atomOneDark}
      customStyle={{
        padding: "1rem",
        boxShadow: "var(--shadow)",
        borderRadius: "3px",
        marginBottom: "2rem",
      }}
      showLineNumbers={showLineNumbers || false}
    >
      {value ? value : children}
    </SyntaxHighlighter>
  )
}
