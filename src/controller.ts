import counterView from './view.js';
import * as model from './model.js';

const controlCounter = function (newCounter: number) {
  model.updateCounter(newCounter);
};

const init = function () {
  // counterView.update();
  counterView.render(model.counter);
  counterView.addHandlerUpdateCounter(controlCounter);
};
init();
