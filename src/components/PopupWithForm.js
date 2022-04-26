import React from 'react';

function PopupWithForm({name, title, children}) {
  return (
    <section className={`popup popup_${name}`}>
    <div className="popup__container">
      <button className="popup__close popup__close_new-place" type="button"></button>
      <h2 className="popup__title">{title}</h2>
      <form className={`popup__form popup__form_${name}`}>
        {children}
        <button type="submit" className="popup__submit-button popup__submit-button_place">Сохранить</button>
      </form>
    </div>
  </section>
  );
}

export default PopupWithForm;
