import React, { FunctionComponent } from "react";
import { NavbarContainer, NavbarContent, NavbarLink } from "./styles";
import Link from "next/link";

export const Navbar: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Link href="/">
          <NavbarLink brand>dk</NavbarLink>
        </Link>
        <Link href="/blog">
          <NavbarLink>Blog</NavbarLink>
        </Link>
        <Link href="/about">
          <NavbarLink>About</NavbarLink>
        </Link>
      </NavbarContent>
    </NavbarContainer>
  );
};
