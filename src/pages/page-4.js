import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FourthPage = () => (
  <Layout>
    <SEO title="Page Four" />
    <h1>Hi from the fourth page</h1>
    <p>I lied.</p>
    <p>I bamboozled you.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
