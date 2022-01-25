import * as yup from "yup";

export const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required("required"),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords dont match!")
});

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().min(8).max(15).required(),
  newPassword: yup.string().min(8).max(15).required(),
  newPasswordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref("newPassword"), null], "Passwords dont match!")
});
