/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const MenuDesktop = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 150px);
`


const Menu = () => {
  return (
    <Container>
      <div>Logo</div>
      <nav>
      <MenuDesktop sx={{color: `primary2`}}>
        <li>Frameworks</li>
        <li>About</li>
        <li>Blog</li>
        <li>Search</li>
      </MenuDesktop>
      </nav>
    </Container>
  )
}

export default Menu
