import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Complain from "./pages/Complain";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Detailproduct from "./pages/Detailproduct";
import Editcategory from "./pages/editCategory";
import Editproduct from "./pages/editProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./style/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<Detailproduct />} />
        <Route path="/editcategory" element={<Editcategory />} />
        <Route path="/editproduct" element={<Editproduct />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {/* {page === "login" ? (
    //     <Login setPage={setPage} />
    //   ) : (
    //     <Register setPage={setPage} />
    //   )} */}
    // </div>
  );
}

export default App;
