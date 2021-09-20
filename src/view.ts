class counterView {
  parentElement = document.querySelector('.render');

  data: number = 0;

  update(data: number) {
    this.data = data;
  }
  addHandlerUpdateCounter(handler: Function) {
    if (this.parentElement) {
      this.parentElement.addEventListener('click', function () {
        const btn = document.querySelector('.btn--update-counter');
        if (!btn) return;
        if (btn instanceof HTMLElement) {
          const { updateTo } = btn.dataset;
          if (updateTo) {
            if (+updateTo > 0) handler(+updateTo);
          }
          // console.log(updateTo);
        }
      });
    }
  }

  generateMarkup() {
    return `
        <div class="counter">
        <span class="recipe__info-data recipe__info-data--people">${
          this.data
        }</span>
        <span class="recipe__info-text">servings</span>
        <button class="btn btn--update-counter" data-update-to="${
          this.data - 1
        }">–</button>
        <button class="btn btn--update-counter" data-update-to="${
          this.data + 1
        }">+</button>
        </div>
    `;
  }
  render(data: number) {
    this.data = data;

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
