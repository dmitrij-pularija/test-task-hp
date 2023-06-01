import { Card, Line, Circle, Avatar } from './UserCard.styled';
import user from '../img/hansel.png';
// import { ReactComponent as Logo } from '../img/logo.svg';
const UserCard = () => {

  return (
    <Card>
  {/* <Logo fill="#ffffff4d" />       */}
  <Line/>
  <Circle><Avatar src={user} /></Circle>
    </Card>
  );
};

export default UserCard;