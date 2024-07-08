import "./Login.scss";

import * as Yup from "yup";

import { Field, Form, Formik } from "formik";

import LogoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

const initialState = {
  email: "",
  phone: "",
  city: "",
  country: "",
  password: "",
  password_confirm: "",
};

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password_confirm: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const { t } = useTranslation();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      //   setValues(initialState);
    }, 2000);
  };
  return (
    <div className="login">
      <div className="login__form-box">
        <img src={LogoImg} alt="logo.png" />
        <h1>{t("register.title")}</h1>
        <p>
          {t("register.desc")}{" "}
          <span>
            {" "}
            <NavLink to={"/register"}> {t("register.log-in")} </NavLink>
          </span>
        </p>
        <Formik
          initialValues={initialState}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="login__form">
              <div className="login__form__input">
                <label htmlFor="">{t("register.email")}</label>
                <Field
                  className={`inp ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  name="email"
                  type="email"
                  placeholder={t("register.email-placeholder")}
                />
              </div>
              <div className="login__form__input">
                <label htmlFor="">{t("register.phone")}</label>
                <Field
                  className={`inp ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  name="phone"
                  type="number"
                  placeholder={t("register.phone-placeholder")}
                />
              </div>
              <div className="df">
                <div className="login__form__input">
                  <label htmlFor="">{t("register.country")}</label>
                  <Field
                    className={`inp ${
                      errors.country && touched.country ? "error" : ""
                    }`}
                    name="country"
                    type="text"
                    placeholder={t("register.city-placeholder")}
                  />
                </div>
                <div className="login__form__input">
                  <label htmlFor="city">{t("register.city")}</label>
                  <Field
                    className={`inp ${
                      errors.email && touched.email ? "error" : ""
                    }`}
                    name="city"
                    type="text"
                    placeholder={t("register.city-placeholder")}
                  />
                </div>
              </div>
              <div className="login__form__input">
                <label htmlFor="">{t("register.password")}</label>
                <Field
                  className={`inp ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  name="password"
                  type="password"
                  placeholder={t("register.password-placeholder")}
                />
              </div>
              <div className="login__form__input">
                <label htmlFor="">{t("register.password-confirm")}</label>
                <Field
                  className={`inp ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  name="password_confirm"
                  type="password"
                  placeholder={t("register.password-confirm-placeholder")}
                />
              </div>
              <button
                className="login__button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("login.button-loading")
                  : t("register.button")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
