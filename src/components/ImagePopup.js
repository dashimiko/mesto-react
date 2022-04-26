import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup_open-picture">
      <div className="popup__picture-container">
        <figure className="popup__figure">
          <img src="<%= require('./images/elements_karachevsk.jpg')%>" className="popup__picture" alt=""></img>
          <figcaption className="popup__description">карачевск</figcaption>
        </figure>
        <button type="button" className="popup__close popup__close_open-picture"></button>
      </div>
    </section>
  );
}

export default ImagePopup;
