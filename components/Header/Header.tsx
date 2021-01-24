import { FC } from "react"
import Link from "next/link"

export const Header: FC = () => {
  const links = [
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
    <div className="container p-8">
      <nav className="flex justify-between">
        <Link href="/">
          <div className="mr-8 text-yellow-600 cursor-pointer font-bold">
            dk
          </div>
        </Link>
        <ul className="flex flex-row">
          {links.map(({ href, text }) => {
            return (
              <li className="pr-5" key={text}>
                <Link href={href}>
                  <div className="mr-8 last:mr-0 cursor-pointer font-bold">
                    {text}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
