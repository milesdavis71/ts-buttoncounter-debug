class Render {
  private counterView: number = 0;
  private parentElement = document.querySelector('.render');

  addHandlerUpdateCounter(handler: Function) {
    this.parentElement?.addEventListener('click', e => {
      const buttonUpdate = e.target as HTMLInputElement;
      const btn = buttonUpdate.closest('.btn--update-counter');
      if (!btn) return;
      if (btn instanceof HTMLElement) {
        const { updateTo } = btn.dataset;
        if (updateTo && +updateTo >= 0) {
          handler(+updateTo);
        }
      }
    });
  }

  generateMarkup() {
    return `
  <button class="btn btn--update-counter" data-update-to=${
    this.counterView - 1
  }>–</button>
        <span>${this.counterView}</span>
        <button class="btn btn--update-counter" data-update-to=${
          this.counterView + 1
        }>+</button>
        `;
  }

  render(counterModelValue: number) {
    this.counterView = counterModelValue;
    const markup = this.generateMarkup();
    this.parentElement?.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    if (this.parentElement) this.parentElement.innerHTML = '';
  }
}

export default new Render();
