import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Card, CardContent, PostTitle } from "./styles";
import { FormattedDate } from "../FormattedDate";

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
    <Link href="/scribbles/[id]" as={`/scribbles/${id}`}>
      <a>
        <Card>
          <CardContent>
            <PostTitle>{title}</PostTitle>
            <FormattedDate dateString={date} />
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};
