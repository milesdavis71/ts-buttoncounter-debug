import counterView from './view.js';
import * as model from './model.js';

const controlCounter = function (newCounter: number) {
  model.updateCounter(newCounter);
  console.log(newCounter);
};
const init = function () {
  // counterView.update();
  counterView.render();
  counterView.addHandlerUpdateCounter(controlCounter);
};
init();
