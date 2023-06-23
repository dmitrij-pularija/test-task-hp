// import Button from "../Button/Button";
import css from "./Forma.module.css";
import { ReactComponent as CheckIcon } from "../assets/img/quality.svg";

const Forma = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <CheckIcon className={css.icom} width={80} height={80} fill={"#859BA6"} />
      <h1 className={css.header} >Дякуємо за заявку!</h1>
      <p className={css.title}>Ваші дані успішно надіслані!</p>
    </div>
  );
};

export default Forma;