import model from './model.js';
import view from './view.js';

const handlerUpdateState = (counterViewValue: number) => {
  model.updateState(counterViewValue);
  view.clear();
  view.render(model.counterStateValue);
};

const init = () => {
  view.render(model.counterStateValue);
  view.addHandlerUpdateCounter(handlerUpdateState);
};
init();
