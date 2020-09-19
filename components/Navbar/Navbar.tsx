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
          <NavbarLink>scribbles</NavbarLink>
        </Link>
        <Link href="/travelogue">
          <NavbarLink>travelogue</NavbarLink>
        </Link>
      </NavbarContent>
    </NavbarContainer>
  );
};
