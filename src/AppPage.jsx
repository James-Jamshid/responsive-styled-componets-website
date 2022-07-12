import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import GlobalStyle from "./globalStyle";
import HomePage from "./pages/Home";
import SignUp from "./pages/SignUpPage";

const AppPage = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/pricing" exact component={Pricing} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
};

export default AppPage;
