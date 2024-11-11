import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="main-wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
