// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardInf, deleteCardFunction) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardInf.name;
    cardElement.querySelector('.card__image').src = cardInf.link;
    cardElement.querySelector('.card__image').alt = cardInf.link;

    const cardDeleteButton = cardElement.querySelector ('.card__delete-button');
    cardDeleteButton.addEventListener('click', () => deleteCardFunction(cardElement))

    return cardElement;
}
// @todo: Функция удаления карточки
const deleteCard = (cardElement) => cardElement.remove();

// @todo: Вывести карточки на страницу
initialCards.forEach((initialCard) => {
    const resultCard = createCard(initialCard, deleteCard)
    placesList.append(resultCard);
})