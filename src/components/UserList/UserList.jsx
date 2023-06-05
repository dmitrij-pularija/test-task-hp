import PropTypes from "prop-types";
import { Gallery } from "./UserList.styled";
import UserCard from "./UserCard";

const UserList = ({ users, handleClick }) => {
  return (
    <Gallery>
      {users.map(({ id, tweets, followers, avatar, isFollowing }) => (
        <UserCard
          key={id}
          id={id}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          handleClick={handleClick}
          isFollowing={isFollowing}
        />
      ))}
    </Gallery>
  );
};

UserList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isFollowing: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default UserList;