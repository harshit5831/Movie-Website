import React, { memo, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import instance from "../../axios";
import { topRatedEndpoint } from "../../axios/endpoints";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";

const TopRated = memo(() => {
  const [topRated, setTopRated] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance
      .get(topRatedEndpoint(page))
      .then((res) => {
        setTopRated((prevTopRated) => [...prevTopRated, ...res.data.results]);

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
  }, [page]);

  return (
    <Layout title="Top rated">
      <Loading loading={isLoading} hasFullHeight={true}>
        <InfiniteScroll
          dataLength={topRated.length}
          next={() => setPage(page + 1)}
          hasMore={hasMore}
          loader={<div className="text_loading">Loading...</div>}
        >
          <Cards title="Top rated movies" data={topRated} />
        </InfiniteScroll>
      </Loading>
    </Layout>
  );
});

export default TopRated;
