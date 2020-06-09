import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContactUsHeader = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Contact us Header" } }) {
        html
        frontmatter {
          title
        }
      }
    }` 
    )   
    return (
        <div className="header-container">
            <div className="container-max-width">
                <div className="bg-wrapper"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
            </div>
         </div>
    )
}
export default ContactUsHeader