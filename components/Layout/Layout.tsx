import { FC, useEffect } from "react"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { gaInit, gaTrackPageView } from "../../lib/ga"

export const Layout: FC = ({ children }) => {
  useEffect(() => {
    gaInit()
    gaTrackPageView()
  }, [])

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen mx-auto">
        <Header />
        <div className="flex flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
