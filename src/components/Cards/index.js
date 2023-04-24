import React, { memo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import s from "./styles.module.scss";

import Card from "../../UI/Card";
import FavoriteButton from "../../UI/FavoriteButton";
import RenderIf from "../../utils/renderIf";

const Cards = memo(({ title = "", data = [] }) => {
  return (
    <div className={s.cards_outer}>
      <RenderIf isTrue={title}>
        <div className={clsx(s.cards_title, "fade_in")}>{title}</div>
      </RenderIf>
      <div className={s.cards_inner}>
        {data?.map((card) => {
          const { id, poster_path, title } = card;
          return (
            <div key={id} className={s.card}>
              <Link to={`/movie/${id}`}>
                <Card path={poster_path} alt={title} />
              </Link>
              <FavoriteButton movie={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Cards;
