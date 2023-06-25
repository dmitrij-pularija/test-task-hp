// import PropTypes from "prop-types";
// import classNames from 'classnames';
import css from "./Button.module.css";


const Button = ({ children, styles, handleClick }) => {
  // const buttonClass = classNames(css.button, styles);
  return (
    <button className={`${css.button} ${styles}`} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   handleClick: PropTypes.func,
//   children: PropTypes.node.isRequired,
//   color: PropTypes.string,
//   width: PropTypes.string,
// };

export default Button;