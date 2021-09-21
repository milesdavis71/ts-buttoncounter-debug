class counterView {
  parentElement = document.querySelector('.render');

  _data: number = 0;

  update(data: number) {
    this._data = data;
  }
  addHandlerUpdateCounter(handler: Function) {
    if (this.parentElement) {
      this.parentElement.addEventListener('click', function () {
        const btn = document.querySelector('.btn--update-counter');
        if (!btn) return;
        console.log(btn);
        if (btn instanceof HTMLElement) {
          const { updateTo } = btn.dataset;
          console.log();
          if (updateTo) {
            handler(+updateTo);
          }
          // console.log(updateTo);
        }
      });
    }
  }

  generateMarkup() {
    return `
    <span class="recipe__info-data recipe__info-data--people">${
      this._data
    }</span>
    <span class="recipe__info-text">servings</span>
    <button class="btn btn--update-counter" data-update-to="${
      this._data - 1
    }">Mínusz</button>
    <button class="btn btn--update-counter" data-update-to="${
      this._data + 1
    }">Plusz</button>
    `;
  }
  render(data: number) {
    this._data = data;

    const markup = this.generateMarkup();
    this.clear();
    this.parentElement?.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    if (this.parentElement) {
      this.parentElement.innerHTML = '';
    }
  }
}

export default new counterView();
