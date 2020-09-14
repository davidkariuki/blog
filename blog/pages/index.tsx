import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Blog() {
  return (
    <>
      <Title>Blog</Title>
      <Link href="/posts/first-post">
        <a>First post</a>
      </Link>
    </>
  );
}
