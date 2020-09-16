import React, { FunctionComponent } from "react";
import { Card, CardContent, PostDate, PostTitle } from "./styles";

interface PostSummaryProps {
  title: string;
  date: string;
}

export const PostSummary: FunctionComponent<PostSummaryProps> = ({
  title,
  date,
}) => {
  return (
    <Card>
      <CardContent>
        <PostTitle>{title}</PostTitle>
        <PostDate>{formatDate(date)}</PostDate>
      </CardContent>
    </Card>
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
