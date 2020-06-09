import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Blogs = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Blogs" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="container-max-width blog bottom-50" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
    )
}
export default Blogs