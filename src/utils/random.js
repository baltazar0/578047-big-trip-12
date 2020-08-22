export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

const getMixedArray = (elements) => {
  let result = [];
  while (elements.length > 0) {
    let random = getRandomInteger(0, elements.length - 1);
    result.push(elements.splice(random, 1)[0]);
  }
  return result;
};

export const getRandomQuantityElements = (elements, min, max) => {
  const arr = elements.slice();
  return getMixedArray(arr).splice(0, getRandomInteger(min, max));
};
