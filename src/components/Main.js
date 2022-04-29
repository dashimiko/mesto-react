import {useState,useEffect} from 'react';
import profileAddButton from '../images/small_add_button.svg';
import {api} from '../utils/Api'
import Card from './Card';

function Main({onEditProfile,onAddPlace,onEditAvatar,onCardClick}){

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInfo()
    .then(([elements, res]) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);

    const rendercard = elements.map((data) => {
      return {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id
      };
    });
    setCards(rendercard);
  }).catch((err) => console.log(err))},[]);

  return (

    <main>

      <section className="profile">
        <button className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar}></img>
        </button>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}><img src={profileAddButton} className="profile__vector" alt="кнопка добавления контента"></img></button>
      </section>

      <section className="elements">
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} onCardClick={onCardClick}/>
          );
        })}
      </section>

    </main>
  );
}

export default Main;
