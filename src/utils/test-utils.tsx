import { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { ThemeProvider } from "theme-ui"
import { theme } from ".."
const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  // Define the property getter
  get() {
    setTimeout(() => this.onloadeddata && this.onloadeddata())
    return () => {}
  }
})

window.HTMLAudioElement.prototype.load = () => {
  /* do nothing */
}

window.HTMLAudioElement.prototype.pause = () => {
  /* do nothing */
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
