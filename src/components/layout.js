/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import styled from "@emotion/styled"

import Backdrop from "../components/ui/backdrop"
import Menu from "./menu"

const LayoutContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: -8px;
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const backdropHandler = () => setIsOpen(!isOpen)

  return (
    <div>
      <LayoutContainer>
        <header sx={{ variant: `layout.header` }}>
          <Menu backdropHandler={backdropHandler} isOpen={isOpen} />
        </header>
        <main>{children}</main>
        <footer sx={{ variant: `layout.footer` }}>
          <div>This is my footer</div>
        </footer>
      </LayoutContainer>
      {isOpen && <Backdrop />}
    </div>
  )
}

export default Layout
