/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    header:
    markdownRemark(frontmatter: { title: { eq: "Header" } }) {
      html
      frontmatter {
        title
      }
    }
    footer:
    markdownRemark(frontmatter: { title: { eq: "Footer" } }) {
      html
      frontmatter {
        title
      }
    }
  }
  `)
  return (
    <>
      <Header data ={data.header} />
      <div
        style={{
          margin: `0 auto`,
          position: `relative`,
          top:`125px`
        }}
      >
        <main>{children}</main>
        <Footer data={data.footer}/>
      </div>
    </>
  )
}
export default Layout
