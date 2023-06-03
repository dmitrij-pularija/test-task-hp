import picture from "../../components/assets/img/backgraund.png";
import { Wrapper, Image, Header } from "./Home.styled";
const HomePage = () => {
  return (
    <Wrapper>
      <Image src={picture} alt="Tweets" />
      <Header>Welcome to the tweets app!</Header>
    </Wrapper>
  );
};

export default HomePage;
