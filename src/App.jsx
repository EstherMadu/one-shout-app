import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-of-use" element={<Terms />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
