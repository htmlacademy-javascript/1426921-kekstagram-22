import {randomNumber} from './util';
const photoCount = 25;

let comm = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let names = [
  'Маша', 'Саша', 'Петя', 'Митя', 'Гриша', 'Валерий Меладзе', 'Алексей Навальный',
];

let desc = [
  'Моя бабушка курит трубку', 'Закат над Геленджиком', 'Человек из газеты', 'Шляпная фабрика', 'В булочную завезли брауни', 'Никто никогда это не прочитает', 'Никто не вернется в 2007 год',
];

const randString = (massive, number) => {
  return massive[number]
};

let list_of_obj = [];

const addComments = () => {
  let comments = [];

  for (let i = 0; i < randomNumber(1, 3); i++){
    comments.push({
      id: randomNumber(1, 125),
      avatar:'img/avatar-'+randomNumber(1, 6)+'.svg',
      message: comm[randomNumber(0, 5)] + (randomNumber(0, 1) === 0) ? ' ' + comm[randomNumber(0, 5)] : '',
      name: randString(names,randomNumber(0, 6)),
    });
  }

  return comments;
};

const addPhotos = () => {
  let x = 0;

  while (x <= photoCount) {
    x++;

    list_of_obj.push({
      id: randomNumber(1, photoCount),
      url: 'photos/'+randomNumber(1, photoCount)+'.jpg',
      description: randString(desc,randomNumber(0, 6)),
      likes: randomNumber(15, 200),
      comments: addComments(),
    });
  }
};

addPhotos();
