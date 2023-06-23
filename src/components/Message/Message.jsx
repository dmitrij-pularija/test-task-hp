import Button from "../Button/Button";
import css from "./Message.module.css";

const Message = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.text}>
        Використовуючи цей сайт, ви даєте згоду на роботу з файлами{" "}
        <a className={css.link} href="#">
          сookies
        </a>
        .
      </div>
      <Button width={"100px"} color={"#FFFFFF"} handleClick={() => onClick()}>
        Згоден
      </Button>
    </div>
  );
};

export default Message;