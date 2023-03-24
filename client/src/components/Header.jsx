import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 ">
      <a className="btn btn-ghost normal-case text-3xl">
        Share
        <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  text-transparent bg-clip-text">
          tastic
        </span>
      </a>
    </div>
  );
}

export default Header;
