import './App.css'
import AboutMe from './components/AboutMe'
import ArtworkListContent from './components/artworks-list-content.tsx'
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import Header from "./components/Header"

function Root() {
  return (
      <div>
          <Header />
        <Routes>
          <Route path="/" element={<ArtworkListContent />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root}]);

export default function App() {
  return <RouterProvider router={router} />;
}
