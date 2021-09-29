class State {
  counterStateValue = 0;

  updateCounter(counterViewValue: number) {
    this.counterStateValue = counterViewValue;
  }
}

export default new State();
