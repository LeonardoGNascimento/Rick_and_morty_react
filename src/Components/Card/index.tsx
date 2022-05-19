import React from "react"
import "./style.css";

export const Card = (personagem: ICard) => {
  return(
    <div id="card" className="d-flex flex-column">
      <div id="cardBody">
          <img id="image" src={personagem?.image}/>
      </div>
      <div className="align-middle">
        <h4 id="cardTitle" >{personagem?.name}</h4>
      </div>
      <div id="cardfooter">
        <p>Especie: {personagem?.species}</p>
        <p>Status: {personagem?.status}</p>
      </div>
    </div>
  )
}