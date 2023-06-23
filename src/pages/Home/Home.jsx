import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import Message from "../../components/Message/Message";
import css from "./Home.module.css";


// import picture from "../../components/assets/img/backgraund.png";
// import { Wrapper, Image, Header } from "./Home.styled";
const Home = () => {
  const [isShowMessage, setIsShowMessage] = useState(true);
  const handleSetCookies = () => setIsShowMessage(false);

  return (
    <>
      <header className={css.header}>
        <Container>
          <Header />
        </Container>
      </header>
      <main className={css.main}>
        <Container>
          <Slider />
          {isShowMessage && <Message onClick={handleSetCookies}/>}
        </Container>
      </main>
    </>
  );
};

export default Home;
