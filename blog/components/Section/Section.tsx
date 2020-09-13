import React, { FunctionComponent } from "react";
import { Grid } from "./style";
import { Post } from "../Post";

interface SectionProps {
  title: string;
}

export const Section: FunctionComponent<SectionProps> = ({ title }) => {
  return (
    <section>
      <title>{title}</title>
      <Grid>
        <Post />
        <Post />
        <Post />
      </Grid>
    </section>
  );
};
