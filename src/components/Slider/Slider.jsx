// import PropTypes from "prop-types";
import css from "./Slider.module.css";
import Button from "../Button/Button";
import backgraund from "../assets/img/background.png";

const Slider = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.slide__about}>
        <h1 className={css.slide__header}>Meltem</h1>
        <div className={css.slide__text}>
          Meltem – це гарантовано якісне вентиляційне обладнання від німецького
          заводу.
        </div>
        <Button width={"140px"} color={"#859BA6"}>
          Продукція
        </Button>
      </div>
      <img
        className={css.image}
        src={backgraund}
        alt="Відцентровий витяжний вентилятор"
        width={560}
        height={385}
      />
      <div className={css.slide__info}>
        <div className={css.slide__info__text}>
          Відцентровий витяжний вентилятор
        </div>
        <div className={css.slide__title}>Meltem V-II 30-N</div>
        <Button width={"140px"} color={"#FFFFFF"}>
          Детальніше
        </Button>
      </div>
    </div>
  );
};

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Slider;
