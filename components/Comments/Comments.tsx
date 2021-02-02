import { useTheme } from "next-themes"
import { FC, useEffect } from "react"

export const Comments: FC = () => {
  const { theme } = useTheme()

  useEffect(() => {
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")

    script.setAttribute("src", "https://utteranc.es/client.js")
    script.setAttribute("crossorigin", "anonymous")
    script.setAttribute("async", "true")
    script.setAttribute("repo", "davidkariuki/blog")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("theme", `github-${theme}`)
    anchor?.appendChild(script)
  }, [theme])

  return <section id="comments"></section>
}
