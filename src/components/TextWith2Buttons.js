import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TextWith2Buttons = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Text with 2 Buttons" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="container-max-width contact-wrapper" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
    )
}
export default TextWith2Buttons