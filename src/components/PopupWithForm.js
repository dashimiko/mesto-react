import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <button className="popup__close popup__close_new-place" type="button" onClick={onClose}></button>
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
