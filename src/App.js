import React, { Suspense } from "react";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Order from "./pages/Home/Review/Order";

const Home = React.lazy(() => import('./pages/Home/Home/Home'));
const ProductDetails = React.lazy(() => import('./pages/Home/Home/ProductDetails'));
const Navbar = React.lazy(() => import('./shared/Navbar/NavBar/Navbar'));
const NotFound = React.lazy(() => import('./shared/NotFound/NotFound'));

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0)
  const value = { count, setCount };

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Almost there...</div>}>
          <Navbar />
          <COUNTER_CONTEXT.Provider value={value}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/books/:bookId" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </COUNTER_CONTEXT.Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
