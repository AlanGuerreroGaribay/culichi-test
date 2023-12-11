import React from "react";
import './LayOut.css'

function LayOut({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default LayOut;
