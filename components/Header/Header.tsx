import { FC, useEffect, useState } from "react"
import Link from "next/link"
import MoonSvg from "../../public/images/moon.svg"
import SunSvg from "../../public/images/sun.svg"
import { useTheme } from "next-themes"
import { Transition } from "@headlessui/react"

export const Header: FC = () => {
  const [isActive, setIsActive] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

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
    {
      href: "/uses",
      text: "uses",
    },
  ]

  return (
    <div className="container px-4 py-8 mx-auto md:p-8">
      <nav className="flex flex-wrap items-center justify-between">
        <Link href="/">
          <div className="mr-8 text-2xl font-bold text-yellow-700 cursor-pointer dark:text-yellow-600">
            dk
          </div>
        </Link>
        <div
          onClick={() => setIsActive(!isActive)}
          className="align-middle cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className={`${isActive ? "" : "hidden"} w-5 h-5 fill-current`}
          >
            <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className={`${isActive ? "hidden" : ""} w-5 h-5 fill-current`}
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>
        <Transition
          as="ul"
          className="pl-0 list-none md:flex md:flex-row md:w-auto w-full border-gray-300 dark:border-gray-700 border-b md:border-b-0 md:border-t-0"
          show={!isActive}
          enter="transition duration-150 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-125 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          {links.map(({ href, text }) => {
            return (
              <li className="my-2 md:my-0 md:pr-5" key={text}>
                <Link href={href}>
                  <div className="mr-8 border-b-2 border-transparent cursor-pointer last:mr-0 hover:border-yellow-600">
                    {text}
                  </div>
                </Link>
              </li>
            )
          })}
          <li className="mt-2 mb-4 md:my-0">
            {mounted && theme === "dark" && (
              <MoonSvg
                className="inline-block cursor-pointer"
                onClick={() => {
                  setTheme("light")
                  setIsActive(!isActive)
                }}
              />
            )}
            {mounted && theme === "light" && (
              <SunSvg
                className="inline-block cursor-pointer"
                onClick={() => {
                  setTheme("dark")
                  setIsActive(!isActive)
                }}
              />
            )}
          </li>
        </Transition>
      </nav>
    </div>
  )
}
