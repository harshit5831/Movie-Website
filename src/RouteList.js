import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Favorite from "./pages/Favorite";
import SingleMovie from "./pages/SingleMovie";
import SingleGenre from "./pages/SingleGenre";
import Person from "./pages/Person";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:name",
    element: <Search />,
  },
  {
    path: "/genres",
    element: <Genres />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
  {
    path: "/top_rated",
    element: <TopRated />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/movie/:id",
    element: <SingleMovie />,
  },
  {
    path: "/genre/:id/:name",
    element: <SingleGenre />,
  },
  {
    path: "/person/:id",
    element: <Person />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routeList;
