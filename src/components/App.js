import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  return (
    <div className="App">
      <div className="page">

      <Header />
      <Main />
      <Footer />

      <PopupWithForm name="edit-profile" title="Редактировать профиль">
        <label className="popup__profile-info">
          <input type="text" id="username" className="popup__input popup__input_edit_name" name ="name" placeholder="Имя" value ="" minlength="2" maxlength="40" required></input>
          <span className="username-error popup__error" id=""></span>
        </label>
        <label className="popup__profile-info">
          <input type="text" id = "description" className = "popup__input popup__input_edit_description" name = "about" placeholder="О себе" value ="" minlength="2" maxlength="200" required></input>
          <span className="description-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="new-place" title="Новое место">
        <label className="popup__profile-info">
          <input id = 'place' name = "place" type="text" className="popup__input popup__input_place_name" placeholder="Название" value ="" minlength="2" maxlength="30" required></input>
          <span className="place-error popup__error" id=""></span>
        </label>
        <label className="popup__profile-info">
          <input type="url" name = "link" id = "link" className = "popup__input popup__input_place_link" placeholder="Ссылка на картинку" value ="" required></input>
          <span className="link-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="change-avatar" title="Обновить аватар">
        <label className="popup__profile-info">
          <input type="url" name = "avatar" id = "avatar" className = "popup__input popup__input_avatar" placeholder="Ссылка на картинку" value ="" required></input>
          <span className="avatar-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?">
        <label className="popup__profile-info">
          <input type="url" name = "avatar" id = "avatar" className = "popup__input popup__input_avatar" placeholder="Ссылка на картинку" value ="" required></input>
          <span className="avatar-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <ImagePopup />

  <template id="place-template">
    <article className="card">
      <img className="card__picture" src="<%= require('./images/elements_karachevsk.jpg')%>" alt=""></img>
      <button className="card__delete-button"></button>
      <div className="card__container">
        <h2 className="card__description"></h2>
        <div className='card__like-container'>
          <button className="card__like" type="button"></button>
          <span className="card__like-count"></span>
        </div>
      </div>
    </article>
  </template>

</div>
    </div>
  );
}

export default App;
