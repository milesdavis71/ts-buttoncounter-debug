export const state = {
  counter: 0,
};

export const updateCounter = function (newNumber: number) {
  state.counter = newNumber;
};
