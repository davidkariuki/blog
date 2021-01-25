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
    <div className={`${theme} flex flex-col items-center mx-auto h-screen`}>
      <Header />
      <div className="flex flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
