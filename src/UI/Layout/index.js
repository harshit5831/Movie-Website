import React, { useEffect } from "react";
import s from "./styles.module.scss";

const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = `MovieApp | ${title ? title : "Loading"}`;
  }, [title]);

  return <div className={s.layout}>{children}</div>;
};

export default Layout;
