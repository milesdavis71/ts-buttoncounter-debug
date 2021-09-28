class State {
    constructor() {
        this.counterActualValue = 0;
        this.updateCounter = (counterNewValue) => {
            this.counterActualValue = counterNewValue;
        };
    }
}
export default new State();
//# sourceMappingURL=model.js.map