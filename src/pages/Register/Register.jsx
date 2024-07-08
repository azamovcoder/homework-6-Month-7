import "./Register.scss";

import * as Yup from "yup";

import { Field, Form, Formik } from "formik";

import LogoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

const initialState = {
  email: "",
  password: "",
};

const Register = () => {
  const { t } = useTranslation();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      //   setValues(initialState);
    }, 2000);
  };
  return (
    <div className="register">
      <div className="form-box">
        <img src={LogoImg} alt="logo.png" />
        <h1>{t("login.title")}</h1>
        <p>
          {t("login.desc")}
          <span>
            <NavLink to={"/login"}>{t("login.log-in")}</NavLink>
          </span>{" "}
        </p>
        <Formik
          initialValues={initialState}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="form">
              <div className="form__input">
                <label htmlFor="">{t("login.email")}</label>
                <Field
                  placeholder={t("login.email-placeholder")}
                  className={`inp ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  name="email"
                  type="email"
                />
              </div>
              <div className="form__input">
                <label htmlFor="">{t("login.password")}</label>
                <Field
                  placeholder={t("login.password-placeholder")}
                  className={`inp ${
                    errors.password && touched.password ? "error" : ""
                  }`}
                  name="password"
                  type="password"
                />
              </div>
              <button
                className="form__button"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? t("login.button-loading") : t("login.button")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
