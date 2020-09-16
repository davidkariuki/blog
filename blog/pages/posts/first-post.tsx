import React, { FunctionComponent } from "react";
import Link from "next/link";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";

const FirstPost: FunctionComponent = () => {
  return (
    <DefaultLayout>
      <h1>First Post!</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </DefaultLayout>
  );
};

export default FirstPost;
