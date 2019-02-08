import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>0ff1c14l t3ss3r4l1s fan site</h1>
    <p>Welc0me 2 the 0ff1c14l t3ss3r4l1s f4n clVb.</p>
    <p>H3r3 U c4n pr41s3 th3 b34Vt1fVl, t4l3nt3d g3n1Vs th4t 1s t3ss3r4l1s</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
