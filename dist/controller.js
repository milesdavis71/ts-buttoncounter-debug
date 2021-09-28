import model from './model.js';
import view from './view.js';
const handleUpdateCounter = (counterNewValue) => {
    model.updateCounter(counterNewValue);
    view.clear();
    view.render(model.counterActualValue);
};
const init = () => {
    view.render(model.counterActualValue);
    view.addHandlerUpdateCounter(handleUpdateCounter);
};
init();
//# sourceMappingURL=controller.js.map