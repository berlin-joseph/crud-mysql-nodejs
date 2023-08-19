import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/Index";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
