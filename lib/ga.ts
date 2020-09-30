import ReactGA from "react-ga"

export const gaInit = (): void => {
  const trackerId = process.env.NEXT_PUBLIC_GA_TRACKER_ID!

  ReactGA.initialize(trackerId)
}

export const gaTrackPageView = (): void => {
  const pathname = window.location.pathname

  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}
