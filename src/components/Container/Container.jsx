import PropTypes from "prop-types";
import css from "./Container.module.css";

const Container = ({ children }) => {
  return <section className={css.wrapper}>{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;