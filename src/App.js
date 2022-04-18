import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AboutMe from "./Components/AboutMe/AboutMe";
import Services from "./Components/Services/Services";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound/>} />
        <Route path="/services/:serviceId" element={<ServiceDetail />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
