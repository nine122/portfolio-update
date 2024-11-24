import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Achievements from "./components/Achievement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Hero />,
      // },
      // {
      //   path: "/home",
      //   element: <Hero />,
      // },
      // {
      //   path: "/story",
      //   element: <MyStory />,
      // },
      {
        path: "/achievements",
        element: <Achievements />,
      },

      // {
      //   path: "/skills",
      //   element: <About />,
      // },
      // {
      //   path: "/work",
      //   element: <Projects />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
