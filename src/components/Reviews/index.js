import React from "react";

import s from "./styles.module.scss";
import { FaUserCircle } from "react-icons/fa";

import { reviewsEndpoint } from "../../axios/endpoints";
import ConditionalWrapper from "../ConditionalWrapper";
import ReadMore from "../../UI/ReadMore";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import { dateFormat } from "../../utils/helpers";

const Reviews = ({ id }) => {
  const { data, isLoading } = useFetch(reviewsEndpoint(id));
  const isReviews = data.results?.length;

  return (
    <Loading loading={isLoading}>
      <ConditionalWrapper
        isCondition={!isReviews}
        text="No reviews available"
        hasHalfHeight={true}
      >
        <div className={`${s.reviews_outer} fade_in`}>
          <div className={s.reviews_inner}>
            {data.results?.map((review) => {
              const { id, author, created_at, content } = review;

              return (
                <div key={id} className={s.review}>
                  <div className={s.author}>
                    <FaUserCircle />
                    <div className={s.info}>
                      <h4>{author}</h4>
                      <p>{dateFormat(created_at)}</p>
                    </div>
                  </div>
                  <ReadMore text={content} limit={400} />
                </div>
              );
            })}
          </div>
        </div>
      </ConditionalWrapper>
    </Loading>
  );
};

export default Reviews;
