import React, { memo, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import instance from "../../axios";
import { popularEndpoint } from "../../axios/endpoints";
import Cards from "../../components/Cards";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";

const Popular = memo(() => {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance
      .get(popularEndpoint(page))
      .then((res) => {
        setPopular((prevPopular) => [...prevPopular, ...res.data.results]);

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
    <Layout title="Popular">
      <Loading loading={isLoading} hasFullHeight={true}>
        <InfiniteScroll
          dataLength={popular.length}
          next={() => setPage(page + 1)}
          hasMore={hasMore}
          loader={<div className="text_loading">Loading...</div>}
        >
          <Cards title="Popular movies" data={popular} />
        </InfiniteScroll>
      </Loading>
    </Layout>
  );
});

export default Popular;
