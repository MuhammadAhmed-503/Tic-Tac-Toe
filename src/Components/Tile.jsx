import React from "react";

const Tile = ({ className, value, onClick, playerTurn }) => {
  let hoverClass = null;
  let valueClass = null;
  
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  
  if (value != null) {
    valueClass = value.toLowerCase();
  }
  
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass} ${valueClass || ''}`}>
      {value}
    </div>
  );
};

export default Tile;
