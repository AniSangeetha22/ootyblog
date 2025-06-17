import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heading from "./pages/Heading";
import PlacesToVisit from "./pages/PlacesToVisit";
import Blog from "./pages/Blog";
import { AuthProvider } from "./context/authContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <>
      <AuthProvider>
        <Heading />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places-to-visit" element={<PlacesToVisit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/heading" element={<Heading />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
export default App;
