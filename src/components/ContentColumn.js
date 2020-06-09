import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContentColumn = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Content Column" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="container-max-width bottom-50" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
    )
}
export default ContentColumn