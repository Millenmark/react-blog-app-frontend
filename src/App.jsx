import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<h1>Walang tao here beh</h1>} />

      <Route path="/" element={<DefaultLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
