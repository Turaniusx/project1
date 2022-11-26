import React from "react";

import {
  Header,
  Blog,
  Features,
  Utility,
  WhatTuran,
  Footer,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatTuran />
      <Features />
      <Utility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
