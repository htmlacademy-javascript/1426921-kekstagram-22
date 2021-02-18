import photos from './data.js';
import showBigPicture from './big-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').src = picture.url;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.social__caption').textContent = picture.description;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    showBigPicture(picture);
  });

  return pictureElement;
};

const renderPhotos = () => {
  const fragment = document.createDocumentFragment();

  photos.forEach((item) => {
    fragment.appendChild(renderPhoto(item));
  });

  pictures.appendChild(fragment);
};

renderPhotos();
