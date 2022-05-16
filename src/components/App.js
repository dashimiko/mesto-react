import React, {useState,useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import {api} from '../utils/Api'
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([profileData, card]) => {
        setCurrentUser(profileData);
        setCards(card);
      }).catch((err) => console.log(err))},[]);

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(null);
    setIsAddPlacePopupOpen(null);
    setIsEditAvatarPopupOpen(null);
    setSelectedCard(null)
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  })}

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {setCards((state) => state.filter((с) => с._id !== card._id))})
    .catch((err) => console.log(err))}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

      <Header />
      <Main
      cards={cards}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick = {handleCardClick}
      onCardLike = {handleCardLike}
      onCardDelete= {handleCardDelete}
      />
      <Footer />

      <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__profile-info">
          <input type="text" id="username" className="popup__input popup__input_edit_name" name ="name" placeholder="Имя" required></input>
          <span className="username-error popup__error" id=""></span>
        </label>
        <label className="popup__profile-info">
          <input type="text" id = "description" className = "popup__input popup__input_edit_description" name = "about" placeholder="О себе" required></input>
          <span className="description-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="new-place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__profile-info">
          <input id = 'place' name = "place" type="text" className="popup__input popup__input_place_name" placeholder="Название" required></input>
          <span className="place-error popup__error" id=""></span>
        </label>
        <label className="popup__profile-info">
          <input type="url" name = "link" id = "link" className = "popup__input popup__input_place_link" placeholder="Ссылка на картинку" required></input>
          <span className="link-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="change-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__profile-info">
          <input type="url" name = "avatar" id = "avatar" className = "popup__input popup__input_avatar" placeholder="Ссылка на картинку" required></input>
          <span className="avatar-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?">
        <label className="popup__profile-info">
          <input type="url" name = "avatar" id = "avatar" className = "popup__input popup__input_avatar" placeholder="Ссылка на картинку" required></input>
          <span className="avatar-error popup__error" id=""></span>
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
