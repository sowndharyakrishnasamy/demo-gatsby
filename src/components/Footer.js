import React from "react"

const Footer = ({ data }) => (
  <footer>
    <div className="container-max-width" dangerouslySetInnerHTML={{ __html: data.html }}/>
  </footer>
)
export default Footer
