import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { Content, PostTitle, Article } from "./styles";
import { FormattedDate } from "../FormattedDate";
import { CodeRenderer } from "../CodeRenderer";

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
      <FormattedDate textCenter={true} dateString={data.date} />
      <Article>
        <ReactMarkdown
          source={data.contentHtml}
          escapeHtml={false}
          renderers={{
            code: CodeRenderer,
          }}
        />
      </Article>
    </Content>
  );
};
