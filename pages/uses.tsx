import { FC } from "react"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { Layout } from "../components/Layout"

const Uses: FC = () => {
  return (
    <Layout>
      <NextSeo title="uses" canonical="https://davidkariuki.com/uses" />
      <div className="flex flex-col justify-center">
        <div className="mb-8 bg-white rounded-lg shadow dark:bg-dark-l">
          <h3 className="mx-4">Hardware</h3>
          <ul className="p-4 m-0 list-none border-t border-gray-200 dark:border-gray-600">
            <li className="mb-2">
              <b>Desktop</b>: i7-7800X | RTX 2080 Ti running Pop!_OS. I built
              this PC many years ago and have been upgrading parts once in a
              while.
            </li>
            <li className="mb-2">
              <b>Ultrabook</b>: LG gram 17 2020, also running Manjaro Linux.
              This is my all-time favourite laptop because of its 1.3kg weight
              and amazing screen.
            </li>
            <li className="mb-2">
              <b>Laptop</b>: Macbook Pro 2016, only used for compatibility
              testing. I used only Apple laptops from 2005-2016, but had to give
              them up because I seem to be allergic to Macbook trackpads.
            </li>
            <li className="mb-2">
              <b>Monitor</b>: ASUS ROG Swift PG279Q x2 (27" 1440p){" "}
            </li>
          </ul>
        </div>

        <div className="mb-4 bg-white rounded-lg shadow dark:bg-dark-l">
          <h3 className="mx-4">Essential Software</h3>
          <ul className="p-4 m-0 list-none border-t border-gray-200 dark:border-gray-600">
            <li className="mb-2">
              <b>Neovim</b> + <b>tmux</b> is my bread and butter.
            </li>
            <li className="mb-2">
              <b>Alacritty</b> is my current terminal emulator, paired with{" "}
              <b>Zsh</b>.
            </li>
            <li className="mb-2">
              <b>Ulauncher</b> application launcher (it has some really good
              extensions).
            </li>
            <li className="mb-2">
              <b>Brave/Firefox</b>.
            </li>
            <li className="mb-2">
              <b>1Password X</b>.
            </li>
            <li className="mb-2">
              You can see what other binaries I use in my
              <Link href="https://github.com/davidkariuki/dotfiles">
                <a target="_blank"> dotfiles </a>
              </Link>
              repository.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Uses
