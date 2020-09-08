/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from 'gatsby'

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
  grid-template-columns: repeat(2, minmax(100px, 1fr));
`

const Menu = () => {
  return (
    <Container>
      <div><Link to="/" sx={{variant: `links.primary`}}>Logo</Link></div>
      <nav>
      <MenuDesktop sx={{color: `primary2`}}>
        <li><Link to='/about' sx={{variant:`links.primary`}}>About</Link></li>
        <li><Link to="/search" sx={{variant: `links.primary`}}>Search</Link></li>
      </MenuDesktop>
      </nav>
    </Container>
  )
}

export default Menu
