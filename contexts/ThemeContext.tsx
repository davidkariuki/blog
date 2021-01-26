import { createContext, FC, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  saveTheme: (_theme: string) => {},
})

export const ThemeStore: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("light")

  const saveTheme = (mode: string) => {
    localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    window.matchMedia("prefers-color-scheme: dark").matches && !theme
      ? saveTheme("dark")
      : savedTheme
      ? saveTheme(savedTheme)
      : saveTheme("light")
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
