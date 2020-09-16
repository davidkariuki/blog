import React, { FunctionComponent } from "react";
import { Content } from "./styles";
import { PostSummary } from "../PostSummary";

interface PostMetaData {
  id: string;
  title: string;
  date: string;
}

interface PostsListProps {
  posts: PostMetaData[];
}

export const PostsList: FunctionComponent<PostsListProps> = ({ posts }) => {
  return (
    <Content>
      {posts.map(({ id, title, date }) => {
        return <PostSummary key={id} title={title} date={date} />;
      })}
    </Content>
  );
};
