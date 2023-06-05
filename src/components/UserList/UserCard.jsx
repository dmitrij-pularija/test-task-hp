import PropTypes from "prop-types";
import {
  Card,
  ContentBox,
  Picture,
  LogoBox,
  ActiveBox,
  TextBox,
  Text,
  Wrapper,
  Line,
  Circle,
  Avatar,
} from "./UserList.styled";
import Button from "../Button/Button";
import user from "../assets/img/hansel.png";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

const UserCard = ({
  id,
  tweets,
  followers,
  avatar,
  isFollowing,
  handleClick,
}) => {
  const formatValue = (value) => value.toLocaleString("En");

  return (
    <Card>
      <ContentBox>
        <LogoBox>
          <Logo fill="#ffffff4d" />
        </LogoBox>
        <Picture />
        <ActiveBox>
          <TextBox>
            <Text>{formatValue(tweets)} tweets</Text>
            <Text>{formatValue(followers)} Followers</Text>
          </TextBox>
          <Button
            color={isFollowing ? "#5CD3A8" : "#ebd8ff"}
            handleClick={() => handleClick({ id, followers, isFollowing })}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </ActiveBox>
      </ContentBox>
      <Wrapper>
        <Line />
        <Circle>
          <Avatar src={avatar ? avatar : user} />
        </Circle>
      </Wrapper>
    </Card>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default UserCard;