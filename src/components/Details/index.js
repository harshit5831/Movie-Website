import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rate from "rc-rate";

import s from "./styles.module.scss";

import useMatch from "../../hooks/useMatch";
import {
  POSTER_URL,
  BACKDROP_URL,
  POSTER_NOT_FOUND,
  BACKDROP_NOT_FOUND,
} from "../../utils/constants";
import RenderIf from "../../utils/renderIf";
import {
  arrayToString,
  dateFormat,
  moneyConverter,
  timeConverter,
} from "../../utils/helpers";

const Details = memo(({ details }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    release_date,
    runtime,
    budget,
    revenue,
    vote_average,
    vote_count,
    production_countries,
    production_companies,
    spoken_languages,
    status,
    tagline,
  } = details;

  const match = useMatch("(min-width: 1024px)");
  const poster = poster_path ? POSTER_URL + poster_path : POSTER_NOT_FOUND;
  const backdrop = backdrop_path
    ? BACKDROP_URL + backdrop_path
    : BACKDROP_NOT_FOUND;

  return (
    <div className={`${s.details_outer} fade_in`}>
      <div className={s.backdrop}>
        <LazyLoadImage effect="blur" src={backdrop} alt={title} />
      </div>
      <RenderIf isTrue={match}>
        <div className={s.poster}>
          <img src={poster} alt={title || "movie_title"} />
        </div>
      </RenderIf>

      <div className={s.details_inner}>
        <div className={s.title_wrapper}>
          <div className={s.title}>{title}</div>
        </div>
        <div>{arrayToString(genres)}</div>
        <RenderIf isTrue={vote_average !== 0}>
          <div className={s.vote}>
            <Rate
              value={vote_average / 2}
              count={5}
              disabled={true}
              allowHalf={true}
            />
            <div className={s.vote_count}>({vote_count})</div>
          </div>
        </RenderIf>
        <div className={s.overview}>{overview}</div>

        <div className={s.info}>
          <div className={s.info_item}>
            <h4>Status:</h4>
            <p>{status}</p>
          </div>
          <RenderIf isTrue={tagline}>
            <div className={s.info_item}>
              <h4>Tag:</h4>
              <p className={s.tag}>{tagline}</p>
            </div>
          </RenderIf>
          <div className={s.info_item}>
            <h4>Languages</h4>
            <p>{arrayToString(spoken_languages)}</p>
          </div>
          <div className={s.info_item}>
            <h4>Country:</h4>
            <p>{arrayToString(production_countries)}</p>
          </div>
          <div className={s.info_item}>
            <h4>Release:</h4>
            <p>{dateFormat(release_date)}</p>
          </div>
          <div className={s.info_item}>
            <h4>Runtime:</h4>
            <p>{timeConverter(runtime)}</p>
          </div>
          <div className={s.info_item}>
            <h4>Budget:</h4>
            <p>{moneyConverter(budget)}</p>
          </div>
          <div className={s.info_item}>
            <h4>Revenue:</h4>
            <p>{moneyConverter(revenue)}</p>
          </div>
          <div className={s.info_item}>
            <h4>Production:</h4>
            <p>{arrayToString(production_companies)}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Details;
