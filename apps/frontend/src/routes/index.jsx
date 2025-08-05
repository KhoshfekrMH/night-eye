import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NewsItem from "../news/pages/NewsItem";
import Archive from "../pages/Archive";
import ArchiveWrapper from "../pages/ArchiveWrapper";
import SearchWrapper from "../pages/SearchWrapper";
import Auth from "../dashboard/pages/Auth";
import Panel from "../dashboard/pages/Panel";
import NotFound from "../pages/NotFound";
import TestPage from "../pages/TestPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
  },
  {
    path: "/about",
    element: <About />,
    label: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    label: "Contact Us",
  },
  {
    path: "/archive",
    element: <Archive category="all" />,
  },
  {
    path: "/archive/space",
    element: <Archive category="space" />,
  },
  {
    path: "/archive/nasa",
    element: <Archive category="nasa" />,
  },
  {
    path: "/archive/tech",
    element: <Archive category="tech" />,
  },
  {
    path: "/archive/:category/:page",
    element: <ArchiveWrapper />,
  },
  {
    path: "/search/:query",
    element: <SearchWrapper />,
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
    path: "*",
    element: <NotFound />,
  },
  {
    //TODO: temp page for just testing
    path: "/test",
    element: <TestPage />,
  },
];

export const mainNavLinks = routes.filter((route) => route.label);
export default routes;
