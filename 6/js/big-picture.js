const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');


const onCloseButtonClick = () => {
  bigPicture.classList.add('hidden');

  closeButton.removeEventListener('click', onCloseButtonClick);
};

const socialComments = bigPicture.querySelector('.social__comments');
const commentTemplate = socialComments.cloneNode(true);

const renderComment = (comments) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = comments.avatar;
  commentElement.querySelector('.social__picture').alt = comments.name;
  commentElement.querySelector('.social__text').textContent = comments.message;

  return commentElement;
};

const renderComments = (comments) => {
  const commentFragment = document.createDocumentFragment(); // фрагмент

  comments.forEach((item) => {
    commentFragment.appendChild(renderComment(item)); // цикл и отрисовка
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(commentFragment);
}


const showBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderComments(picture.comments);

  bigPicture.classList.remove('hidden');
  closeButton.addEventListener('click', onCloseButtonClick);

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
};

export default showBigPicture;
