import React, { FunctionComponent } from "react"
import { NavbarContainer, NavbarLink } from "./styles"
import Link from "next/link"

export const Header: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <Link href="/">
        <NavbarLink brand>dk</NavbarLink>
      </Link>
      <Link href="/scribbles">
        <NavbarLink>scribbles</NavbarLink>
      </Link>
      <Link href="/about">
        <NavbarLink>about</NavbarLink>
      </Link>
    </NavbarContainer>
  )
}
