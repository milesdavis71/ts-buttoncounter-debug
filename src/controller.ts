import counterView from './view.js';
import * as model from './model.js';

// Gombra klikkeléskor fut le.
const controlCounter = function (newCounter: number) {
  // A modelben átadja a state-ben lévő adatot
  // felülíró függvénynek a view-ból érkező adatot.
  model.updateCounter(newCounter);
};

const init = function () {
  // Betölti a html-t a View-n keresztül.
  counterView.render(model.state.counter);

  counterView.addHandlerUpdateCounter(controlCounter);
};
init();
