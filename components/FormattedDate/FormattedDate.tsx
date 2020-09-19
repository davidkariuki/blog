import React, { FunctionComponent } from "react";
import { PostDate } from "./styles";

interface DateProps {
  dateString: string;
  textCenter?: boolean;
}

export const FormattedDate: FunctionComponent<DateProps> = ({
  dateString,
  textCenter,
}) => {
  const date = new Date(dateString);
  const formattedDateString = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return <PostDate textCenter={textCenter}>{formattedDateString}</PostDate>;
};
