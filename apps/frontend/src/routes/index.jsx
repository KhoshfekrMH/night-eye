import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NewsItem from "../news/pages/NewsItem";
import Archive from "../pages/Archive";
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
    element: <Archive type="all" />,
  },
  {
    path: "/archive/space",
    element: <Archive type="space" />,
  },
  {
    path: "/archive/nasa",
    element: <Archive type="nasa" />,
  },
  {
    path: "/archive/tech",
    element: <Archive type="technology" />,
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
