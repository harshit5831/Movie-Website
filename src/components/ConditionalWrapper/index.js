import React from "react";
import clsx from "clsx";
import s from "./styles.module.scss";

const ConditionalWrapper = ({
  isCondition = true,
  text = "No data available",
  hasHalfHeight = false,
  children,
}) => {
  return (
    <>
      {isCondition ? (
        <div
          className={clsx(s.text, "fade_in", {
            [s.half_height]: hasHalfHeight,
          })}
        >
          {text}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ConditionalWrapper;
