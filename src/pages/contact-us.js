import React from "react"
import Layout from '../components/layout';
import '../css/main.css'
import ContactUsHeader from "../components/ContactUsHeader";
import ContactDetails from "../components/ContactDetails";
import TextWith2Buttons from "../components/TextWith2Buttons";
import AddressDetails from "../components/AddressDetails";
export default function Template() {
  return (
    <Layout>
        <ContactUsHeader/>
        <TextWith2Buttons/>
        <ContactDetails />
        <AddressDetails/>
    </Layout>
  )
}