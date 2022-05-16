class Api {
  constructor({baseUrl,headers}) {
    this._headers = headers;
    this._baseUrl = baseUrl
  }

  getInfo() {
    return Promise.all([this.getInitialCards(), this.getProfile()])
  }

  getProfile(){
    return fetch(`${this._baseUrl}/users/me`,{
      headers: this._headers
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,{
      headers: this._headers
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  editProfile(name,about) {
    return fetch(`${this._baseUrl}/users/me`,{
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  addImage(name,link) {
    return fetch(`${this._baseUrl}/cards`,{
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`,{
      method: "DELETE",
      headers: this._headers,
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
      method: "DELETE",
      headers: this._headers,
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
      method: "PUT",
      headers: this._headers,
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  editAvatar( avatar ) {
    return fetch(`${this._baseUrl}/users/me/avatar`,{
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      })
    }).then(res => res.ok ? res.json() : Promise.reject(res.status))
    .catch(console.log)
  }

  changeLikeCardStatus(id, isLiked) {
    return isLiked ? this.addLike(id) : this.deleteLike(id);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '5d808031-4cbc-4c7d-b6b0-a6ebf55d9f1f',
    'Content-Type': 'application/json'
  }
});
