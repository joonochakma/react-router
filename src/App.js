import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <nav>our navbar</nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>} />
        </Route>
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  );
}

export default App;
