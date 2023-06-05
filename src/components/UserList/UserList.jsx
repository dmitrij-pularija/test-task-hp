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

export default UserList;