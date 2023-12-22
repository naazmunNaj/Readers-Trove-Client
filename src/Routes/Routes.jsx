/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleCategoryBooks from "../Pages/SingleCategoryBooks/SingleCategoryBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/allCategoryBooks",
            element: <AllBooks></AllBooks>,
        },
        {
            path: "/allCategoryBooks/:categoryname",
            element: <SingleCategoryBooks></SingleCategoryBooks>,
        },
        {
            path: "/allCategoryBooks/:categoryname/:id",
            element: <BookDetails></BookDetails>,
            // loader:()=> fetch(`http://localhost:5000/allCategoryBooks`)
        },
        {
            path: "/addBooks",
            element: <AddBooks></AddBooks>,
        },
        {
            path: "/borrowedBooks",
            element: <BorrowedBooks></BorrowedBooks>,
            loader: ()=> fetch(`http://localhost:5000/borrowedBooks`)
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router