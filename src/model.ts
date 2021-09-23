export const state = {
  counter: 0,
};

export const updateCounter = function (newCounter: number) {
  state.counter = newCounter;
};
