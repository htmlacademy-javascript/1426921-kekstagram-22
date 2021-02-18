const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const onCloseButtonClick = () => {
  bigPicture.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseButtonClick);
};

let socialComments = bigPicture.querySelector('.social__comments');

const addComments = (comments) => {

  const commentElement = socialComments.cloneNode(true); // склонировать первую ноду
  socialComments.innerHTML = '';
  commentElement.querySelector('.social__picture').src = comments.avatar;
  commentElement.querySelector('.social__picture').alt = comments.name;
  commentElement.querySelector('.social__text').textContent = comments.message;

};

const renderComment = () => {
  const commentFragment = document.createDocumentFragment(); // фрагмент

  comments.forEach((item) => {
    commentFragment.appendChild(renderComment(item)); // цикл и отрисовка
  });

  socialComments.appendChild(commentFragment);
}
renderComment ();

const showBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;

  addComments(picture.comments);

  bigPicture.classList.remove('hidden');
  closeButton.addEventListener('click', onCloseButtonClick);
};

export default showBigPicture;
