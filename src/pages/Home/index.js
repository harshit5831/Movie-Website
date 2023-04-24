import React from "react";

import { popularEndpoint, topRatedEndpoint } from "../../axios/endpoints";
import Carousel from "../../components/Carousel";
import NowPlaying from "../../components/NowPlaying";
import Footer from "../../UI/Footer";
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";

const Popular = () => {
  const { data, isLoading } = useFetch(popularEndpoint());

  return (
    <Loading loading={isLoading}>
      <Carousel title="Popular Movies" data={data?.results} />
    </Loading>
  );
};

const TopRated = () => {
  const { data, isLoading } = useFetch(topRatedEndpoint());

  return (
    <Loading loading={isLoading}>
      <Carousel title="Top Rated Movies" data={data?.results} />
    </Loading>
  );
};

const Home = () => {
  return (
    <Layout title="Home">
      <div className="home">
        <NowPlaying />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
