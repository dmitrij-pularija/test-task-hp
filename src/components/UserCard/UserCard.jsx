import {
  Card,
  ContentBox,
  LogoBox,
  ActiveBox,
  TextBox,
  Text,
  Button,
  Line,
  Circle,
  Avatar,
} from "./UserCard.styled";
import user from "../assets/img/hansel.png";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Picture } from "../assets/img/backgraund.svg";

const UserCard = () => {
  return (
    <Card>
      <ContentBox>
        <LogoBox>
          <Logo fill="#ffffff4d" />
        </LogoBox>
        <Picture />
        <ActiveBox>
          <TextBox>
            <Text>777 tweets</Text>
            <Text>100,500 Followers</Text>
          </TextBox>
          <Button type="submit">Follow</Button>
        </ActiveBox>
      </ContentBox>

      <Line />
      <Circle>
        <Avatar src={user} />
      </Circle>
    </Card>
  );
};

export default UserCard;