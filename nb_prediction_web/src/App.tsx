import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./assets/navbar";
import HomepageDashboard from "./dashboard/homepage/homepageDasboard";

function App() {
  useEffect(() => {
    document.title = "Machine Learning";
  }, []);
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomepageDashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
