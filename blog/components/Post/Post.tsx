import React, { FunctionComponent } from "react";
import Link from "next/link";

export const Post: FunctionComponent = () => {
  return (
    <Link href="/post/[id]" as="/post/example" passHref>
      <a>Foo</a>
    </Link>
  );
};
