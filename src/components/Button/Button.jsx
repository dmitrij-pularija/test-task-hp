import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ children, styles, handleClick }) => {
  return (
    <button className={`${css.button} ${styles}`} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  styles: PropTypes.string,
};

export default Button;