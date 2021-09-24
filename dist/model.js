export const state = {
    // Ez jelenik meg az oldalon a view-ból történő első markup betöltéskor.
    counter: 0,
};
// Felülírja a state-et a gombnyomás hatására
export const updateCounter = function (newCounter) {
    state.counter = newCounter;
};
//# sourceMappingURL=model.js.map