import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import s from "./styles.module.scss";
import imagesList from "./images";

import { genresEndpoint } from "../../axios/endpoints";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";

const Genres = () => {
  const { data, isLoading } = useFetch(genresEndpoint());

  return (
    <Layout title="Genres">
      <Loading loading={isLoading} hasFullHeight={true}>
        <div className={s.genres_outer}>
          <div className={`${s.genres_title} fade_in`}>Genres</div>
          <div className={s.genres_inner}>
            {data.genres?.map((genre) => {
              const { id, name } = genre;
              return (
                <Link
                  to={`/genre/${id}/${name}`}
                  key={id}
                  className={s.genres_link}
                >
                  <div className={s.genres_image}>
                    <figure>
                      <picture>
                        <LazyLoadImage
                          src={imagesList[name]}
                          alt={name}
                          effect="blur"
                        />
                      </picture>
                    </figure>
                    <div className={s.genres_name}>{name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Loading>
    </Layout>
  );
};

export default Genres;
