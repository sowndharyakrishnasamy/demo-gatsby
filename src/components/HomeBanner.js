import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HomeBanner = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Home Banner" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="home-banner bottom-50" >
          <div className="container-max-width">
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
          </div>
        </div>
    )
}
export default HomeBanner