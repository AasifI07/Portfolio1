import React from "react";
import "../header/header.css";

function Header() {
  return (
    <div className="header_div1">
      <div className="h_div1">
        <div>Sobre Mim</div>
        <div>Projetos</div>
        <div>Skills</div>
        <div>Educação</div>
        <div className="h_circle">
          <div className="circle1">
            <div className="circle2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
