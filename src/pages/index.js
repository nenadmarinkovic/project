import React from "react";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Option from "../components/Option";
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <About />
      <Option />
      <Project />
      <Footer />
    </>
  );
}
