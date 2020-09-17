import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { Content, PostTitle } from "./styles";
import { FormattedDate } from "../FormattedDate";
import { Code } from "../Code";

interface PostProps {
  data: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}

export const PostBody: FunctionComponent<PostProps> = ({ data }) => {
  return (
    <Content>
      <PostTitle>{data.title}</PostTitle>
      <FormattedDate dateString={data.date} />
      <ReactMarkdown
        source={data.contentHtml}
        escapeHtml={false}
        renderers={{
          code: Code,
        }}
      />
    </Content>
  );
};
//<h1>{data.title}</h1>
//<p>{data.date}</p>
// <span dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
