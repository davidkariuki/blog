import React, { FC } from "react"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { Layout } from "../components/Layout"
import { Article } from "../styles/shared"

const Uses: FC = () => {
  return (
    <Layout>
      <NextSeo title="uses" canonical="https://davidkariuki.com/uses" />
      <Article>
        <h3>Hardware</h3>
        <ul>
          <li>
            <b>Desktop</b>: i7-7800X | RTX 2080 Ti running Pop!_OS. I built this
            PC many years ago and have been upgrading parts once in a while.
          </li>
          <li>
            <b>Ultrabook</b>: LG gram 17 2020, also running Pop!_OS. This is my
            all-time favourite laptop because of its 1.3kg weight and amazing
            screen.
          </li>
          <li>
            <b>Laptop</b>: Macbook Pro 2016, only used for compatibility
            testing. I used only Apple laptops from 2005-2016, but had to give
            them up because I seem to be allergic to Macbook trackpads.
          </li>
          <li>
            <b>Monitor</b>: ASUS ROG Swift PG279Q x2 (27" 1440p), but plan to
            switch to a 49" ultrawide curved screen when I have the space for
            it.
          </li>
        </ul>
        <h3>Essential Software</h3>
        <ul>
          <li>
            <b>Neovim</b> + <b>tmux</b> is my bread and butter.
          </li>
          <li>
            <b>Alacritty</b> is my current terminal emulator, paired with{" "}
            <b>Zsh</b>.
          </li>
          <li>
            <b>Ulauncher</b> application launcher (it has some really good
            extensions).
          </li>
          <li>
            <b>Brave/Firefox</b>.
          </li>
          <li>
            <b>1Password X</b>.
          </li>
          <li>
            You can see what other binaries I use in my
            <Link href="https://github.com/davidkariuki/dotfiles">
              <a target="_blank"> dotfiles </a>
            </Link>
            repository.
          </li>
        </ul>
      </Article>
    </Layout>
  )
}

export default Uses
