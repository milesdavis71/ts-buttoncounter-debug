export const state = {
  counter: 10,
};

export const updateCounter = function (newCounter: number) {
  state.counter = newCounter;
};
