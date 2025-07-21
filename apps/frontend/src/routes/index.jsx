import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NewsItem from "../news/pages/NewsItem";
import Auth from "../dashboard/pages/Auth";
import Panel from "../dashboard/pages/Panel";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: false,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/news/:slug",
    element: <NewsItem />,
  },
  {
    path: "/auth", //TODO: authentication-based routes
    element: <Auth />,
  },
  {
    path: "/panel/:uid", //TODO: authentication-based routes
    element: <Panel />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
