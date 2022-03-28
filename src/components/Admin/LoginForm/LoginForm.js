import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../../api/user";
import {useAuth} from '../../../hooks/useAuth'


export const LoginForm = () => {
  const {login}=useAuth();


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const {access} = response;
        login(access)
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Correo electronico"
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        placeholder="Contraseña"
        type="password"
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" content="Entrar" primary fluid />
    </Form>
  );
};

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
