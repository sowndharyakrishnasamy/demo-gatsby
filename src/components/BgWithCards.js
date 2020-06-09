import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BgWithCards = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Bg Cards" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="investment-wrapper padding-50 bottom-50">
          <div class="container-max-width"  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        </div>
    )
}
export default BgWithCards