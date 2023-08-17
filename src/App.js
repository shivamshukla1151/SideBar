import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import StudentSearchParam from "./pages/StudentSearchParam";
import StudentSimpleQuery from "./pages/StudentSimpleQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "link1",
    element: <StudentSearchParam />,
  },
  {
    path: "link2",
    element: <StudentSimpleQuery />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
