import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom">
      {" "}
      <a class="navbar-brand ml-2 font-weight-bold" href="#">
        <img
          className="logo-img"
          alt=""
          srcset=""
          src="../../img/logo.png"
        />
      </a>{" "}
    </nav>
  );
}

export default NavBar;
