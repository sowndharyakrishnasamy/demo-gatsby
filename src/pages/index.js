import React from "react"
import Layout from '../components/layout';
import '../css/main.css'
import HomeBanner from "../components/HomeBanner";
import TextWithButton from "../components/TextWithButton";
import ContentColumn from "../components/ContentColumn";
import BgWithCards from "../components/BgWithCards";
import Blogs from "../components/Blogs";
import FooterBanner from "../components/FooterBanner";
export default function Home() {
  return (
    <Layout>
      <HomeBanner/>   
      <TextWithButton/>
      <ContentColumn/> 
      <BgWithCards/>
      <Blogs/>
      <FooterBanner/>
    </Layout>
  )
}
