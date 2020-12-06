import React from "react";
import { Title, Meta } from "react-head";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import styles from "../styles/styles.css";

export default function Home() {
  return (
    <>
      <Title>For Female Professionals</Title>
      <Meta name="description" content="Avuteq Project" />
      <GlobalStyle />
      <Header />
      <Form />
      <Footer />
    </>
  );
}
