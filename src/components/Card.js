import React from 'react';

function Card ({card,onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <img onClick={handleClick} className="card__picture" src={card.link} alt={card.name}></img>
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
