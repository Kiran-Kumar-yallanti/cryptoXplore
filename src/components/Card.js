import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card-container">
      <div className="card-img">
          <img src={props.img} alt={props.name} width="75" height="75"></img>
      </div>
      <div className="card-title">{props.name}</div>
      <div className="card-description">
          <p>rank : {props.rank}</p>
          <p>price : ${props.price}</p>
          <p>Cap : {props.marketCap}</p>
      </div>
    </div>
    </>
  )
}

export default Card;