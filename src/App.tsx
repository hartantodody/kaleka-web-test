import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda, DetailCoordinate, TentangKami } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/detail/:coordinates' element={<DetailCoordinate />} />
          <Route path='/about-us' element={<TentangKami />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
