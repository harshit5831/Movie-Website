import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import instance from "../../axios";
import { singleGenreEndpoint } from "../../axios/endpoints";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import ConditionalWrapper from "../../components/ConditionalWrapper";

const SingleGenre = () => {
  const { id, name } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance
      .get(singleGenreEndpoint(id, page))
      .then((res) => {
        setMovies((prevMovies) => [...prevMovies, ...res.data.results]);

        if (page === res.data.total_pages) {
          setHasMore(false);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, page]);

  return (
    <Layout title={name}>
      <Loading loading={isLoading}>
        <ConditionalWrapper isCondition={!movies.length}>
          <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            loader={<div className="text_loading">Loading...</div>}
          >
            <Cards title={name} data={movies} />
          </InfiniteScroll>
        </ConditionalWrapper>
      </Loading>
    </Layout>
  );
};

export default SingleGenre;
