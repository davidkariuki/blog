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
        <Link href="/scribbles">
          <NavbarLink>Scribbles</NavbarLink>
        </Link>
        <Link href="/wanderlust">
          <NavbarLink>Wanderlust</NavbarLink>
        </Link>
      </NavbarContent>
    </NavbarContainer>
  );
};
