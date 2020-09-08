/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Menu from "./menu"

const LayoutContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0px auto;
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <header>
        <Menu />
      </header>
      <main>{children}</main>
      <footer sx={{variant: `layout.footer`}}>
        <div>This is my footer</div>
      </footer>
    </LayoutContainer>
  )
}

export default Layout
