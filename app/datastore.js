const store = new Map();

const set = (key, value) => {
  store.set(key, value);
};

const get = (key) => {
  return store.get(key);
};

module.exports = {
  set,
  get,
};
