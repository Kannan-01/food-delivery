import React from "react";
import "../Assets/css/menu.css";
function Menu() {
  const listStyle = {
    fontSize: '1.8rem',
    lineHeight: '1.5',
    fontWeight: 300,
    color: 'rgb(255, 255, 255)',
    cursor: 'pointer',
    padding: '0.8rem', 
  };
  return (
    <div className="menubg" style={{ height: "30rem" }}>
      <nav>
        <ul style={{ listStyle: "none", display: "inline-flex" }}>
          <li style={listStyle}>Add restaurant</li>
          <li style={listStyle}>login</li>
          <li style={listStyle}>signup</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
