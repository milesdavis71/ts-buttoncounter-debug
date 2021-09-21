import counterView from './view.js';
import * as model from './model.js';

const controlCounter = function (newCounter: number) {
  model.updateCounter(newCounter);
  counterView.render(model.state.counter);
};

const init = function () {
  // counterView.update();
  counterView.render(model.state.counter);
  counterView.addHandlerUpdateCounter(controlCounter);
};
init();
