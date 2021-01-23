import { FC } from "react"
import { NavbarContainer, NavbarLink } from "./styles"
import Link from "next/link"

export const Header: FC = () => {
  const links = [
    {
      href: "/",
      text: "dk",
    },
    {
      href: "/scribbles",
      text: "scribbles",
    },
    {
      href: "/about",
      text: "about",
    },
    {
      href: "/travelogue",
      text: "travelogue",
    },
  ]

  return (
    <div className="flex flex-none p-8">
      {links.map(({ href, text }) => {
        return (
          <Link key={text} href={href}>
            <div className="mr-8 last:mr-0 first:flex-grow hover:text-yellow-600 cursor-pointer font-bold">
              {text}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
