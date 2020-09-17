import React, { FunctionComponent } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  language?: string;
  showLineNumbers?: boolean;
  value?: string;
}

export const Code: FunctionComponent<Props> = ({
  children,
  language,
  showLineNumbers,
  value,
}) => {
  return (
    <SyntaxHighlighter
      language={language || "typescript"}
      style={atomOneDark}
      showLineNumbers={showLineNumbers || false}
    >
      {value ? value : children}
    </SyntaxHighlighter>
  );
};
