
const randomNumber = (min, max) => {
  if (max > min && min >= 0)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return -1;
  }
};

randomNumber(0, 500);

const cutString = (text, maxLength) => {
  return text.length <= maxLength ? true : false;
};

cutString('word', 4);

let comm = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

let names = [
  'Маша', 'Саша', 'Петя', 'Митя', 'Гриша', 'Валерий Меладзе', 'Алексей Навальный',
]

let desc = [
  'Моя бабушка курит трубку', 'Закат над Геленджиком', 'Человек из газеты', 'Шляпная фабрика', 'В булочную завезли брауни', 'Никто никогда это не прочитает', 'Никто не вернется в 2007 год',
]

const randString = (massive, number) => {
  return massive[number]
};

let list_of_obj = [];

let x = 0;
while (x <= 25) {
  x++;

  let obj  = {
    id: randomNumber(1, 25),
    url: 'photos/'+randomNumber(1, 25)+'.jpg',
    description: randString(desc,randomNumber(0,6)),
    likes: randomNumber(15, 200),
    comments: [],
  }

  for (let i = 0; i < randomNumber(1,3); i++){

    let com_obj = {
      id: randomNumber(1, 125),
      avatar:'img/avatar-'+randomNumber(1, 6)+'.svg',
      message: '',
      name:randString(names,randomNumber(0,6)),
    }

    obj.comments.push(com_obj)

    if (randomNumber(0,1)>0){
      com_obj.message = comm[randomNumber(0,5)]
    }else{
      com_obj.message = comm[randomNumber(0,5)] +' '+ comm[randomNumber(0,5)]
    }
  }

  list_of_obj.push(obj);

}
