import * as counterView from './view.js';
import * as model from './model.js';
// publisher-subscriber pattern –> ez a Subscribe; ha megtörtént a kilkkelés,
// akkor igénybe veszi azt, és lefut.
// Ez a kapcsolat a View és a Model között.
const controlCounter = function (newCounter) {
    // A modelben átadja a state-ben lévő adatot
    // felülíró függvénynek a view-ból érkező adatot.
    model.updateCounter(newCounter);
    // Törli az előző View-t.
    counterView.clear();
    // Minden egyes +/- klikknél újrarendereli a webolodalt a View segítségével
    // a modelből érkező counter számmal.
    counterView.render(model.state.counter);
};
const init = function () {
    // Betölti a a html-t a View-n keresztül. (Ekkor a counter 0)
    counterView.render(model.state.counter);
    counterView.addHandlerUpdateCounter(controlCounter);
};
init();
//# sourceMappingURL=controller.js.map