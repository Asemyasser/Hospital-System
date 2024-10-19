import "./App.css";
import Blogs from "./Components/pages/Blogs/Blogs";
import Home from "./Components/pages/Home/Home";
import BlogDetails from './Components/pages/BlogDetails/BlogDetails';
import Header from './Components/shared/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


