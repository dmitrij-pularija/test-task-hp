import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import Message from "../../components/Message/Message";
import Modal from "../../components/Modal/Modal";
import Forma from "../../components/Forma/Forma";

import css from "./Home.module.css";


// import picture from "../../components/assets/img/backgraund.png";
// import { Wrapper, Image, Header } from "./Home.styled";
const Home = () => {
  const [isShowMessage, setIsShowMessage] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleSetCookies = () => setIsShowMessage(false);
  const handleSetShowModal = () => setIsShowModal(!isShowModal);
  return (
    <>
      <header className={css.header}>
        <Container>
          <Header onClick={handleSetShowModal}/>
        </Container>
      </header>
      <main className={css.main}>
        <Container>
          <Slider />
          {isShowMessage && <Message onClick={handleSetCookies}/>}
        </Container>
      </main>
      {isShowModal && <Modal closeModal={handleSetShowModal}><Forma /></Modal>}
    </>
  );
};

export default Home;
