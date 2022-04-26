import React from 'react';
import profileAddButton from '../images/small_add_button.svg';

function handleEditAvatarClick () {
  document.querySelector('.popup_change-avatar').classList.add('popup_opened')
}

function handleEditProfileClick () {
  document.querySelector('.popup_edit-profile').classList.add('popup_opened')
}

function handleAddPlaceClick () {
  document.querySelector('.popup_new-place').classList.add('popup_opened')
}

function Main() {
  return(
    <main>

      <section className="profile">
        <button className="profile__avatar-container" onClick={handleEditAvatarClick}>
          <img className="profile__avatar" src="https://s3.nat-geo.ru/images/2020/3/23/192046828b7048648e3106b3d202c33a.max-2000x1000.jpg" alt="Фотография пользователя."></img>
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}><img src={profileAddButton} class="profile__vector" alt="кнопка добавления контента"></img></button>
      </section>

      <section className="elements"></section>

    </main>
  );
}

export default Main;
