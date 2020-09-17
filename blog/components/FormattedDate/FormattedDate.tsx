import React, { FunctionComponent } from "react";
import { PostDate } from "./styles";

interface DateProps {
  dateString: string;
}

export const FormattedDate: FunctionComponent<DateProps> = ({ dateString }) => {
  const date = new Date(dateString);
  const formattedDateString = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return <PostDate>{formattedDateString}</PostDate>;
};
