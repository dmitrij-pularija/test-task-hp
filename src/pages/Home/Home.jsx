import Container from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import css from "./Home.module.css";


// import picture from "../../components/assets/img/backgraund.png";
// import { Wrapper, Image, Header } from "./Home.styled";
const Home = () => {
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
        </Container>
      </main>
    </>
  );
};

export default Home;
