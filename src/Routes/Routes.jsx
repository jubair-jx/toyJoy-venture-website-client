import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../src/components/Home/Home/Home";
import AddToy from "../components/Pages/AddToy/AddToy";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRoute from "../ProtectedRoutes/PrivateRoute";
import MyToys from "../components/Pages/MyToys/MyToys";
import Alltoys from "../components/Pages/AllToys/Alltoys";
import Blog from "../components/Pages/Blog/Blog";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import ShowUpdateToys from "../components/Pages/MyToys/UpdateToys/ShowUpdateToys";
import ShowCategoryDetails from "../components/Home/Category/ShowCategoryDetails/ShowCategoryDetails";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <Alltoys></Alltoys>,
      },

      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/showToy/:id",
        element: <ShowUpdateToys></ShowUpdateToys>,
        loader: ({ params }) =>
          fetch(
            `https://toy-website-server-phi.vercel.app/myToys/update/${params.id}`
          ),
      },
      {
        path: "/showDetail/:id",
        element: (
          <PrivateRoute>
            <ShowCategoryDetails></ShowCategoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-website-server-phi.vercel.app/allToys/detail/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
