import "./Header.scss";

import React, { Fragment } from "react";

import LogoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <header className="header container">
        <div className="header__logo">
          <img src={LogoImg} alt="logo.png" />
        </div>
        <ul className="header__list">
          <li>
            <span>{t("header.service")}</span>
          </li>
          <li>
            <span>{t("header.about")}</span>
          </li>
          <li>
            <span>{t("header.contacts")}</span>
          </li>
          <li>
            <NavLink to={"/register"}>
              <button>{t("header.log-in")}</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>
              <button>{t("header.open-account")}</button>
            </NavLink>
          </li>
          <li>
            <select
              name=""
              id=""
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="eng">ENG</option>
              <option value="uz">UZB</option>
            </select>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
