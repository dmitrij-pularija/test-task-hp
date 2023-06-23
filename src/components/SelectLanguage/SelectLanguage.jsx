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
      <label className={`${css.toggle__button} ${selectedLanguage === "ua" && css.checked}`}>
        <input
          type="radio"
          value="ua"
          checked={selectedLanguage === "ua"}
          onChange={(event) => handleSelectLanguage(event)}
        />
        UA
      </label>
      <label className={`${css.toggle__button} ${selectedLanguage === "ru" && css.checked}`}>
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