import React from "react";

import s from "./styles.module.scss";
import { ReactComponent as TMDB_LOGO } from "../../assets/images/tmdb_logo.svg";

const Footer = () => {
  return (
    <div className={s.footer}>
      <a
        href="https://www.themoviedb.org"
        target="_blank"
        rel="noreferrer"
        className={s.logo}
      >
        <TMDB_LOGO />
      </a>
      <div className={s.text}>Build on React • 2021</div>
    </div>
  );
};

export default Footer;
