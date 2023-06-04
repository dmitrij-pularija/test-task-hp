import PropTypes from "prop-types";
import { Btn } from "./Button.styled";

const Button = ({ children, color, handleClick }) => {
  return (
    <Btn type="button" color={color} onClick={() => handleClick()}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Button;