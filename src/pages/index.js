import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
<<<<<<< HEAD
    <h1>0ff1c14l t3ss3r4l1s fan site</h1>
    <p>Welc0me 2 the 0ff1c14l t3ss3r4l1s f4n clVb.</p>
    <p>Pr41s3 m3.</p>
=======
    <h1>Official tesseralis fan site</h1>
    <p>Welcome to the official tesseralis fan club.</p>
    <p>Here you can praise the beautiful, talented genius that is tesseralis</p>
    <p>Praise me.</p>
>>>>>>> 0a13a76072a89200a88dc3ccaf8b3692bc3a57c9
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
