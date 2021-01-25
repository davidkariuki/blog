import { createContext, FC, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "dark",
  saveTheme: (_theme: string) => {},
})

export const ThemeStore: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark")

  const saveTheme = (mode: string) => {
    localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  useEffect(() => {
    window.matchMedia("prefers-color-scheme: dark").matches && !theme
      ? saveTheme("dark")
      : theme
      ? saveTheme(theme)
      : saveTheme("light")
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
