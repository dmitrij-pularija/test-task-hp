import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import Button from "../Button/Button";
import css from "./Forma.module.css";
import { ReactComponent as CheckIcon } from "../assets/img/quality.svg";
import { initialState, validation } from "../../services/initial";

const Forma = () => {
  const [step, setStep] = useState(1);
  // const [state, setState] = useState(initialState);

  // const handlePhone = (value) => {
  //   const phone = value.replace(/[^0-9+]/g, "");
  //   setState((prevState) => ({ ...prevState, phoneNumber: phone || "+" }));
  // };
  const handleSubmit = (event) => {
    setStep(step + 1);
    console.log(event);
  }
  return (
    <> 
    {step === 1 ?  
    <div className={css.wrapper_step1}>
      <h1 className={css.header}>Залишайте заявку</h1>
      <p className={css.title}>Ми зв’яжемося з вами найближчим часом.</p>
      <Formik initialValues={initialState} validationSchema={validation} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
      <Form autoComplete="off">
      <div className={css.form} > 
      <Field 
       className={`${css.field} ${errors.name && touched.name ? css.error : ''}`}
     type={"text"}
     name={"name"}
     placeholder={"Ваше ім’я*"}
     />   
           <Field 
      className={`${css.field} ${css.number} ${errors.number && touched.number ? css.error : ''}`}
     type={"tel"}
     name={"number"}
     placeholder={"+380-00-000-00-00*"}
     />  
    <Button width={"100%"} color={"#859BA6"} type="submit" handleClick={()=> {}}>
    Відправить
        </Button>
    <div className={css.terms}> Натискаючи кнопку “Надіслати”, ви погоджуєтесь з <a className={css.link} href="#">Правилами обробки персональних даних.</a></div>
    </div>  
        </Form>
        )}    
      </Formik>  
    </div>
    : 
    <div className={css.wrapper_step2}>
      <CheckIcon className={css.icom} width={80} height={80} fill={"#859BA6"} />
      <h1 className={css.header} >Дякуємо за заявку!</h1>
      <p className={css.title}>Ваші дані успішно надіслані!</p>
    </div>}
    </>
  );
};

export default Forma;