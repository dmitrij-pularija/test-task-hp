import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import css from "./Header.module.css";
import { ReactComponent as LogoIcon } from "../assets/img/logo.svg";
import { ReactComponent as BurgerIcon } from "../assets/img/burger.svg";
import { ReactComponent as CloseIcon } from "../assets/img/x.svg";

const Header = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (event) => setIsOpen(!isOpen);
  return (
    <>
      <div className={css.wrapper}>
        <LogoIcon className={css.logo} fill={"#859BA6"} />
        <ul className={`${css.nav__list} ${css.controll}`}>
          <li className={css.nav__item}>Компанія</li>
          <li className={css.nav__item}>Продукція</li>
          <li className={css.nav__item}>Статті</li>
          <li className={css.nav__item}>Рішення</li>
          <li className={css.nav__item}>Контакти</li>
        </ul>
        <div className={css.menu}>
          <a
            href="tel:+380800000000"
            className={`${css.phone} ${css.controll}`}
          >
            0 (800) 00-00-00
          </a>
          <Button styles={css.button} handleClick={() => onClick()}>
            Зв’язатись
          </Button>
          <button className={css.button__menu} onClick={toggleMenu}>
            {isOpen ? (
              <CloseIcon fill={"#859BA6"} width={"30px"} height={"25px"} />
            ) : (
              <BurgerIcon fill={"#859BA6"} width={"30px"} height={"25px"} />
            )}
          </button>
          <div className={css.controll}>
            <SelectLanguage />
          </div>
        </div>
        {isOpen && (
          <div className={css.burger__menu}>
            <div className={css.burger__menu__wrapper}>
              <ul className={`${css.nav__list} ${css.burger__menu__list}`}>
                <li className={css.nav__item}>Компанія</li>
                <li className={css.nav__item}>Продукція</li>
                <li className={css.nav__item}>Статті</li>
                <li className={css.nav__item}>Рішення</li>
                <li className={css.nav__item}>Контакти</li>
              </ul>
              <a href="tel:+380800000000" className={css.phone}>
                0 (800) 00-00-00
              </a>
            </div>
            <SelectLanguage />
          </div>
        )}
      </div>
    </>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
};

export default Header;