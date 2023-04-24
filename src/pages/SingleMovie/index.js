import React, { memo } from "react";
import { useParams } from "react-router-dom";

import { recommendedMovie, singleMovie } from "../../axios/endpoints";
import ConditionalWrapper from "../../components/ConditionalWrapper";
import Details from "../../components/Details";
import Tabs from "../../components/Tabs";
import Carousel from "../../components/Carousel";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";

const Recommended = memo(({ id }) => {
  const { data } = useFetch(recommendedMovie(id));

  if (!data.results?.length) {
    return null;
  }

  return (
    <Carousel
      title="Recommended Movies"
      data={data?.results}
      style={{ marginBottom: 50 }}
    />
  );
});

const SingleMovie = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(singleMovie(id));

  return (
    <Layout title={error ? "Not found" : data?.title}>
      <Loading loading={isLoading} hasFullHeight={true}>
        <ConditionalWrapper isCondition={!!error} text={error}>
          <Details details={data} />
          <Tabs id={id} />
          <Recommended id={id} />
        </ConditionalWrapper>
      </Loading>
    </Layout>
  );
};

export default SingleMovie;
