import { FC, useContext, useEffect } from "react"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { gaInit, gaTrackPageView } from "../../lib/ga"
import ThemeContext from "../../contexts/ThemeContext"

export const Layout: FC = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    gaInit()
    gaTrackPageView()
  }, [])

  return (
    <div className={theme}>
      <div className="flex flex-col items-center min-h-screen mx-auto bg-gray-50 dark:bg-icicle text-icicle dark:text-gray-50">
        <Header />
        <div className="flex flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
