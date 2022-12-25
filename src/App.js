import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import BookDetails from "./pages/Home/Home/BookDetails";
import Navbar from "./shared/Navbar/NavBar/Navbar";

import NotFound from "./shared/NotFound/NotFound";
const Home = React.lazy(() => import('./pages/Home/Home/Home'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
