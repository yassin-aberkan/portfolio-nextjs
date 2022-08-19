import Head from 'next/head'
import Image from 'next/image'

import Layout from "../components/layout";
import HomePage from "../components/home";
import Services from "../components/services";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div>
      <Layout className="landingOther" page="Home">
        <HomePage className=""/>
        <hr className="border-gray-400 lg:mx-44 mx-14"/>
        <Services/>
        <hr className="border-gray-400 lg:mx-44 mx-14"/>
        <Projects/>
      </Layout>
    </div>
  )
}
