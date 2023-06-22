import Button from "../Button/Button";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import css from "./Header.module.css";
import { ReactComponent as LogoIcon } from "../assets/img/logo.svg";

const Header = () => {
  return (
    <div className={css.wrapper}>
      <LogoIcon width={146} height={30} fill={"#859BA6"} />
      <nav>
        <ul className={css.nav__list}>
          <li className={css.nav__item}>Компанія</li>
          <li className={css.nav__item}>Продукція</li>
          <li className={css.nav__item}>Статті</li>
          <li className={css.nav__item}>Рішення</li>
          <li className={css.nav__item}>Контакти</li>
        </ul>
      </nav>
      <div className={css.menu}>
        <a href="tel:+380800000000" className={css.phone}>
          0 (800) 00-00-00
        </a>
        <Button width={"140px"} color={"#859BA6"}>
          Зв’язатись
        </Button>
        <SelectLanguage />
      </div>
    </div>
  );
};

export default Header;