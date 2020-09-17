import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Card, CardContent, PostDate, PostTitle } from "./styles";

interface PostSummaryProps {
  title: string;
  date: string;
  id: string;
}

export const PostSummary: FunctionComponent<PostSummaryProps> = ({
  title,
  date,
  id,
}) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a>
        <Card>
          <CardContent>
            <PostTitle>{title}</PostTitle>
            <PostDate>{formatDate(date)}</PostDate>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
};
