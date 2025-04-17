import ArtworksListContent from "./components/ArtworksListContent"
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import ArtworkContent from "./components/ArtworkContent";

function Root() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<ArtworksListContent/>}></Route>
        <Route path="/about" element={<AboutMe/>}></Route>
        <Route path="/artwork/:id" element={<ArtworkContent />} />
      </Routes>
    </div>
  )
}

const router = createBrowserRouter (
  [{ path: "*", Component: Root}]
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
