import { createBrowserRouter } from "react-router";
import HomeScreen from "../features/home";
import DetailScreen from "../features/detail";

export const routes = createBrowserRouter([
  {
    element: <HomeScreen />,
    path: "/",
  },
  {
    element: <DetailScreen />,
    path: "/detail",
  },
]);
