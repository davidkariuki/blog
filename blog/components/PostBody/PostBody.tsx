import React, { FunctionComponent } from "react";

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
    <>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </>
  );
};
