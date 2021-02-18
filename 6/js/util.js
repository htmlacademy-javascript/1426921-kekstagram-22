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

const cutString = (text, maxLength) => {
  return text.length <= maxLength ? true : false;
};

export {randomNumber};
export {cutString};
