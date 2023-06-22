import PropTypes from "prop-types";
import css from "./Button.module.css";


const Button = ({ children, color, width, handleClick }) => {
  return (
    <button className={css.button} style={{ background: color, width: width, color: color === "#859BA6" ? "#FFFFFF" : "#859BA6", border: color === "#FFFFFF" ? "2px solid  #859BA6" : "none"}} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
};

export default Button;