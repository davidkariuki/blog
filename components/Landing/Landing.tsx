import { FC } from "react"
import Link from "next/link"

export const Landing: FC = () => {
  return (
    <div className="container flex flex-col justify-center p-8">
      <p className="text-4xl font-extrabold mb-4">
        Hello, I'm{" "}
        <span className="text-yellow-700 dark:text-yellow-600">David</span>.
      </p>
      <p className="mb-4">
        I like to code, travel and dance, and this is where I write down my
        thoughts, learnings and life experiences.
      </p>
      <p className="mb-4">
        Thanks for stopping by! While you are here feel free to read more about
        me
        <Link href="/about">
          <a> here</a>
        </Link>
        , see where I'm headed next in my
        <Link href="/travelogue">
          <a> travelogue </a>
        </Link>
        , or read my latest
        <Link href="/scribbles">
          <a> scribbles</a>
        </Link>
        .
      </p>
    </div>
  )
}
