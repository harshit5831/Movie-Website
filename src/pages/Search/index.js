import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import instance from "../../axios";
import { searchEndpoint } from "../../axios/endpoints";
import Cards from "../../components/Cards";
import ConditionalWrapper from "../../components/ConditionalWrapper";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import Button from "../../UI/Button";
import RenderIf from "../../utils/renderIf";

const Search = () => {
  const { name } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingInit, setIsLoadingInit] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    setIsLoadingInit(true);

    instance
      .get(searchEndpoint(1, name))
      .then((res) => {
        setMovies(res.data.results);

        if (res.data.page === res.data.total_pages) {
          setHasMore(false);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoadingInit(false);
      });

    return () => {
      setPage(1);
      setHasMore(true);
    };
  }, [name]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);

    instance
      .get(searchEndpoint(page + 1, name))
      .then((res) => {
        setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
        setPage((prevPage) => prevPage + 1);

        if (res.data.page === res.data.total_pages) {
          setHasMore(false);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoadingMore(false);
      });
  };

  return (
    <Layout title={name}>
      <Loading loading={isLoadingInit} hasFullHeight={true}>
        <ConditionalWrapper isCondition={!movies.length} text="Nothing found">
          <Cards title={name} data={movies} />
          <RenderIf isTrue={hasMore}>
            <Button
              style={{ marginBottom: 40 }}
              center={true}
              disabled={isLoadingMore}
              onClick={handleLoadMore}
            >
              {isLoadingMore ? "Loading..." : "Load more"}
            </Button>
          </RenderIf>
        </ConditionalWrapper>
      </Loading>
    </Layout>
  );
};

export default Search;
