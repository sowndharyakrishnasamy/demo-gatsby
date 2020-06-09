import React from "react"

const Header = ({ data }) => (
  <header>
    <div dangerouslySetInnerHTML={{ __html: data.html }}/>
  </header>
)
export default Header
