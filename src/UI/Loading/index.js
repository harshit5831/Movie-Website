import React from "react";
import clsx from "clsx";
import s from "./styles.module.scss";

const Loading = ({
  loading = true,
  hasFullHeight = false,
  style = {},
  children,
}) => {
  return (
    <>
      {loading ? (
        <div
          className={clsx(s.loading_wrapper, {
            [s.full_height]: hasFullHeight,
          })}
          style={style}
        >
          <div className={s.loading} />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
