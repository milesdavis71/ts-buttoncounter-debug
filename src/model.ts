class State {
  counterStateValue = 0;

  updateState = (CounterViewValue: number) => {
    this.counterStateValue = CounterViewValue;
  };
}
export default new State();
