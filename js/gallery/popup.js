import {isEscapeKey} from '../utilities.js';
import {renderComments} from './comments.js';

const popup = document.querySelector('.big-picture');
const closeButton = popup.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeButton.click();
  }
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onkCloseButtonClick = () => {
  closePopup();
};

closeButton.addEventListener('click', onkCloseButtonClick);

const openPopup = () => {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderPopup = (properties) => {
  const {url, description, likes, comments} = properties;
  popup.querySelector('img').src = url;
  popup.querySelector('.social__caption').textContent = description;
  popup.querySelector('.likes-count').textContent = likes;
  renderComments(comments);
  openPopup();
};

export {renderPopup};
