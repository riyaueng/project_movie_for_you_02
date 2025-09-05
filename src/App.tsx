import "./App.css"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import MovieDetails from "./pages/movieDetails/MovieDetails"
import ErrorPage from "./pages/errorPage/ErrorPage"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/:movieDetails",
        Component: MovieDetails,
      },
      {
        path: "*",
        errorElement: <ErrorPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
