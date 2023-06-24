import * as Yup from "yup";
const phoneRegExp = /^\+380-\d{2}-\d{3}-\d{2}-\d{2}$/;
const nameRegExp =  /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'Ґіїє'ЇЄІА-Яа-я\s]+$/;


export const validation = Yup.object().shape({
    name: Yup.string()
    .matches(nameRegExp, 'Імя може містити тільки Українські літери')
    .required('Поле "Імя" обовʼязклве до заповнення')
    .min(2, "Мінімалька довжина 2 літери"),
    number: Yup.string()
    .matches(phoneRegExp, 'Невірнмй формат номера телефону')
    .required('Поле "Номер телефону" обовʼязклве до заповнення'),
});

export const initialState = {
    name: '',
    number: '',
  };