import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";

// Pages
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { lazy } from "react";
import Schedule from "./components/Schedule";

// Not found
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />}></Route>
          <Route path="schedule" element={<Schedule />}></Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
