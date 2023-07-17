import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-orange-100">
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
