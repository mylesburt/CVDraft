import React from "react";
import "../../styles.css";

function Navbar(props) {
  return (
    <nav className="flex bg-gray-200 justify-between items-center py-4">
      <p className="py-2 px-8">{props.navHeader}</p>
      <div className="flex px-8">
        <p className="py-2 px-8">Welcome {props.navUserId}</p>
        <a
          href="/"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
