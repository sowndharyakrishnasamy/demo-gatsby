import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AddressDetails = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Addresses & Hours" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="container-max-width">
          <h2>{data.markdownRemark.frontmatter.title}</h2>
          <div className="card-container" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        </div>
    )
}
export default AddressDetails