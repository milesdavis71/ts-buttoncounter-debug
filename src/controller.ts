import { updateCounter } from './model.js';
import { clear, render, addHandlerUpdateCounter } from './view.js';
import { state } from './model.js';
const controlCounter = function (newCounter: number) {
  updateCounter(newCounter);
  clear();
  render(state.counter);
};

const init = () => {
  render(state.counter);
  addHandlerUpdateCounter(controlCounter);
};

init();
