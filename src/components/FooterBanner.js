import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FooterBanner = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Footer Banner" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="footer-banner">
             <div className="container-max-width" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        </div>
    )
}
export default FooterBanner