import React from "react";
import clsx from "clsx";

import s from "./styles.module.scss";

const Button = (props) => {
  const {
    style = {},
    center = false,
    disabled = false,
    onClick = () => {},
    children,
  } = props;

  return (
    <div
      className={clsx(s.button_wrapper, { [s.center]: center })}
      style={style}
    >
      <button className={s.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
