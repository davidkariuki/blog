import { FC } from "react"
import GithubSvg from "../../public/images/github.svg"
import TwitterSvg from "../../public/images/twitter.svg"
import LinkedInSvg from "../../public/images/linkedin.svg"

export const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className="w-full border-t">
      <div className="container flex flex-row p-8 mx-auto">
        <div className="mr-auto text-sm">© David Kariuki {year}</div>
        <a href="https://github.com/davidkariuki" target="_blank">
          <GithubSvg className="w-6 h-6 fill-current text-icicle dark:text-gray-50 hover:text-yellow-600 dark:hover:text-yellow-600" />
        </a>
        <a href="https://twitter.com/davidkariuki" target="_blank">
          <TwitterSvg className="ml-4 w-6 h-6 fill-current text-icicle dark:text-gray-50 hover:text-yellow-600 dark:hover:text-yellow-600" />
        </a>
        <a href="https://www.linkedin.com/in/dkariuki/" target="_blank">
          <LinkedInSvg className="w-6 h-6 ml-4 fill-current text-icicle dark:text-gray-50 hover:text-yellow-600 dark:hover:text-yellow-600" />
        </a>
      </div>
    </div>
  )
}
