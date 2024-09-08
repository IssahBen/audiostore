import Earphones from "./Components/Earphones/earphones";
import Headphones from "./Components/Headphones/headphones";
import Home from "./Components/Home/Home";
import Speakers from "./Components/Speakers/speakers";
import Speaker from "./Components/Speakers/speakers";
import { DataProvider } from "./Context/DataContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
