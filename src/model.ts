class State {
  counterActualValue = 0;

  updateCounter = (counterNewValue: number) => {
    this.counterActualValue = counterNewValue;
  };
}
export default new State();
