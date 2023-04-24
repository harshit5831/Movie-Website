import React from "react";
import { useParams } from "react-router-dom";

import s from "./styles.module.scss";

import { personEndpoint, personMoviesEndpoint } from "../../axios/endpoints";
import ConditionalWrapper from "../../components/ConditionalWrapper";
import Carousel from "../../components/Carousel";
import Layout from "../../UI/Layout";
import ReadMore from "../../UI/ReadMore";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import RenderIf from "../../utils/renderIf";
import { POSTER_NOT_FOUND, POSTER_URL } from "../../utils/constants";
import { dateFormat } from "../../utils/helpers";

const PersonMovies = ({ id }) => {
  const { data } = useFetch(personMoviesEndpoint(id));

  return (
    <Carousel
      title="Movies"
      data={data?.cast}
      style={{ marginBottom: "40px" }}
    />
  );
};

const Person = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(personEndpoint(id));

  const { profile_path, name, birthday, deathday, place_of_birth, biography } =
    data;

  let poster;
  profile_path
    ? (poster = POSTER_URL + profile_path)
    : (poster = POSTER_NOT_FOUND);

  return (
    <Layout title={error ? "Not found" : data?.name}>
      <Loading loading={isLoading} hasFullHeight={true}>
        <ConditionalWrapper isCondition={!!error} text={error}>
          <div className={s.person}>
            <div className={s.image}>
              <img src={poster} alt={name} />
            </div>
            <div className={s.info}>
              <h1>{name}</h1>
              <RenderIf isTrue={birthday}>
                <div className={s.info_item}>
                  <h3>Birthday</h3>
                  <p>
                    {dateFormat(birthday)}
                    {deathday === null ? "" : ` — ${dateFormat(deathday)}`}
                  </p>
                </div>
              </RenderIf>
              <RenderIf isTrue={place_of_birth}>
                <div className={s.info_item}>
                  <h3>Place of Birth</h3>
                  <p>{place_of_birth}</p>
                </div>
              </RenderIf>
              <RenderIf isTrue={biography}>
                <div className={s.info_item}>
                  <h3>Biography</h3>
                  <ReadMore text={biography} limit={400} />
                </div>
              </RenderIf>
            </div>
          </div>
          <PersonMovies id={id} />
        </ConditionalWrapper>
      </Loading>
    </Layout>
  );
};

export default Person;
