class counterView {
  parentElement = document.querySelector('.render');

  data: number = 0;

  update(data: number) {
    this.data = data;
    const newMarkup = this.generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    if (this.parentElement) {
      const curElements = Array.from(this.parentElement.querySelectorAll('*'));
      newElements.forEach((newEl, i) => {
        const curEl = curElements[i];
        console.log(newEl.isEqualNode(curEl));

        curEl.textContent = newEl.textContent;
      });
    }
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
  render() {
    const markup = this.generateMarkup();
    this.parentElement?.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new counterView();
