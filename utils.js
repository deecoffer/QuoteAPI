const getRandomElement = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Expected an array')
  } else {
  return arr[Math.floor(Math.random() * arr.length)];
  }
}

module.exports = {
  getRandomElement
};
