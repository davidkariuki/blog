import { FC } from "react"
import { NavbarContainer, NavbarLink } from "./styles"
import Link from "next/link"

export const Header: FC = () => {
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
      <Link href="/travelogue">
        <NavbarLink>travelogue</NavbarLink>
      </Link>
    </NavbarContainer>
  )
}
