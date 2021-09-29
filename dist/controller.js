import view from './view.js';
import model from './model.js';
const handlerUpdateState = (counterValueView) => {
    model.updateCounter(counterValueView);
    view.clear();
    view.render(model.counterStateValue);
};
const init = () => {
    view.render(model.counterStateValue);
    view.addHandlerUpdateCounter(handlerUpdateState);
};
init();
//# sourceMappingURL=controller.js.map