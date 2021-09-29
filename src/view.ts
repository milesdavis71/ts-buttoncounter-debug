class Render {
  counterViewValue = 0;
  parentElement = document.querySelector('.render');

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
    <span>${this.counterViewValue}</span>
    <span class="recipe__info-text">servings</span>
    <button class="btn btn--update-counter" data-update-to="${
      this.counterViewValue - 1
    }"><strong>–</strong></button>
    <button class="btn btn--update-counter" data-update-to="${
      this.counterViewValue + 1
    }"><strong>+</strong></button>
    `;
  }
  clear() {
    if (this.parentElement) {
      this.parentElement.innerHTML = '';
    }
  }
  render(counterStateValue: number) {
    this.counterViewValue = counterStateValue;
    const markup = this.generateMarkup();
    if (this.parentElement) {
      this.parentElement.insertAdjacentHTML('afterbegin', markup);
    }
  }
}
export default new Render();
