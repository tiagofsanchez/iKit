/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"

const About = () => (
  <Layout withHero={true}>
    <section sx={{ variant: `layout.main` }}> 
    <h1 >Here you will find all the typography for now</h1>
    <h2>This is H2</h2>
    <h3>This is H3</h3>
    <h4>This is H4</h4>
    <p>This is the normal paragraph</p>
    <p sx={{variant: `text.tagline`}}>This is a tagline</p>
    <p sx={{variant: `text.caption`}}>This is a caption</p>
    </section>
  </Layout>
)

export default About
