import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://via.placeholder.com/150"
        alt="profile picture"
      />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">Opiskelen tieto- ja viestintätekniikka</p>
    </div>
  );
}

export default Card;
