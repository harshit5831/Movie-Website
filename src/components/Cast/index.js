import React from "react";

import { castEndpoint } from "../../axios/endpoints";
import ConditionalWrapper from "../ConditionalWrapper";
import Carousel from "../Carousel";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";

const Cast = ({ id }) => {
  const { data, isLoading } = useFetch(castEndpoint(id));

  return (
    <Loading loading={isLoading}>
      <ConditionalWrapper isCondition={!data?.cast} hasHalfHeight={true}>
        <Carousel
          data={data?.cast}
          isCast={true}
          style={{ margin: "20px 0 80px 0" }}
        />
      </ConditionalWrapper>
    </Loading>
  );
};

export default Cast;
