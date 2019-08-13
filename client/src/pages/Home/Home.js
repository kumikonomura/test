import React from "react";
import NavBar from "../../components/NavBar";
import MastHead from "../../components/MastHead/MastHead";
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = _ => {
  return (
    <>
      <NavBar />
      <MastHead />
      <ContactForm />
    </>
  );
};

export default Home;
