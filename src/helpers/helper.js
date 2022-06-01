export const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const generateURL = (category, difficulty, type) => {
  let urlString = '';
  if (category !== 'any') {
    urlString += `&category=${category}`;
  }
  if (difficulty !== 'any') {
    urlString += `&difficulty=${difficulty}`;
  }
  if (type !== 'any') {
    urlString += `&type=${type}`;
  }
  return urlString;
};
