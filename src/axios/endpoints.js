import { API_KEY } from "../utils/constants";

const genresEndpoint = () =>
  `genre/movie/list?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const singleGenreEndpoint = (id, page) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=4de535de6d791366ed942db02c069590&language=en-US&with_genres=${id}&page=${page}&sort_by=popularity.desc`;

const nowPlayingEndpoint = () =>
  `movie/now_playing?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const popularEndpoint = (page) =>
  `movie/popular?api_key=4de535de6d791366ed942db02c069590&language=en-US${
    page ? `&page=${page}` : "&page=1"
  }`;

const topRatedEndpoint = (page) =>
  `movie/top_rated?api_key=4de535de6d791366ed942db02c069590&language=en-US${
    page ? `&page=${page}` : "&page=1"
  }`;

const searchEndpoint = (page, name) =>
  `search/movie?api_key=4de535de6d791366ed942db02c069590&language=en-US&page=${page}&query=${name}`;

const singleMovie = (id) => `movie/${id}?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const recommendedMovie = (id) =>
  `movie/${id}/recommendations?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const personEndpoint = (id) => `person/${id}?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const personMoviesEndpoint = (id) =>
  `person/${id}/movie_credits?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const castEndpoint = (id) =>
  `movie/${id}/credits?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const photosEndpoint = (id) =>
  `movie/${id}/images?api_key=4de535de6d791366ed942db02c069590&language=en-US&include_image_language=null`;

const videosEndpoint = (id) =>
  `movie/${id}/videos?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

const reviewsEndpoint = (id) =>
  `movie/${id}/reviews?api_key=4de535de6d791366ed942db02c069590&language=en-US`;

export {
  genresEndpoint,
  singleGenreEndpoint,
  nowPlayingEndpoint,
  popularEndpoint,
  topRatedEndpoint,
  searchEndpoint,
  singleMovie,
  recommendedMovie,
  personEndpoint,
  personMoviesEndpoint,
  castEndpoint,
  photosEndpoint,
  videosEndpoint,
  reviewsEndpoint,
};
