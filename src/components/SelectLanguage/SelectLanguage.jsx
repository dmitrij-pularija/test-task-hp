import React, { useState } from "react";
import css from "./SelectLanguage.module.css";

const SelectLanguage = () => {
  const [selectedLanguage, setLanguage] = useState("ua");

  const handleSelectLanguage = ({ target: { value } }) => {
    setLanguage(value);
    console.log(selectedLanguage);
  };

  return (
    <div className={css.toggle}>
      <label className={css.toggle__button}>
        <input
          type="radio"
          value="ua"
          checked={selectedLanguage === "ua"}
          onChange={(event) => handleSelectLanguage(event)}
        />
        UA
      </label>
      <label className={css.toggle__button}>
        <input
          type="radio"
          value="ru"
          checked={selectedLanguage === "ru"}
          onChange={(event) => handleSelectLanguage(event)}
        />
        RU
      </label>
    </div>
  );
};

export default SelectLanguage;