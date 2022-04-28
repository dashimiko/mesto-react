import React from 'react';

function Card ({card}) {

  return (
    <article className="card">
      <img className="card__picture" src={card.link} alt={card.name}></img>
      <button className="card__delete-button"></button>
      <div className="card__container">
        <h2 className="card__description">{card.name}</h2>
        <div className='card__like-container'>
          <button className="card__like" type="button"></button>
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
