import { Gallery } from "./UserList.styled";
import UserCard from "./UserCard";

const UserList = ({users}) => {
  return (
    <Gallery>
    {users.map(
      ({ id, user, tweets, followers, avatar }) => (
        <UserCard
          key={id}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      )
    )}
  </Gallery>
  );
};

export default UserList;