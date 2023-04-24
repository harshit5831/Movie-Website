import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import s from "./styles.module.scss";

import { nowPlayingEndpoint } from "../../axios/endpoints";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import { BACKDROP_URL, BACKDROP_NOT_FOUND } from "../../utils/constants";
import RenderIf from "../../utils/renderIf";
import { Link } from "react-router-dom";
import Rate from "rc-rate";

const NowPlaying = () => {
  const { data, isLoading } = useFetch(nowPlayingEndpoint());

  return (
    <Loading loading={isLoading}>
      <div className="fade_in">
        <Swiper
          className="mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {data.results?.map((movie) => {
            const { id, title, overview, backdrop_path, vote_average } = movie;
            const backdrop = backdrop_path
              ? BACKDROP_URL + backdrop_path
              : BACKDROP_NOT_FOUND;

            return (
              <SwiperSlide key={id}>
                <div className={s.image}>
                  <LazyLoadImage
                    effect="blur"
                    src={backdrop}
                    alt={title || "movie"}
                  />
                </div>
                <div className={s.info_outer}>
                  <div className={s.info_inner}>
                    <Link to={`/movie/${id}`} className={s.title}>
                      {title}
                    </Link>
                    <RenderIf isTrue={vote_average !== 0}>
                      <div className={s.vote}>
                        <Rate
                          value={vote_average / 2}
                          count={5}
                          disabled={true}
                          allowHalf={true}
                        />
                      </div>
                    </RenderIf>
                    <RenderIf isTrue={overview}>
                      <div className={s.overview}>{overview}</div>
                    </RenderIf>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Loading>
  );
};

export default NowPlaying;
