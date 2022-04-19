import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import NotFound from "./NotFound/NotFound";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import ServiceDetail from "./Home/ServiceDetail/ServiceDetail";
import Blog from "./Blog/Blog";
import About from "./About/About";

function App() {
  return (
    <div className="min-vh-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
