class counterView {
  parentElement = document.querySelector('.render');

  data: number = 0;

  addHandlerUpdateCounter() {
    if (this.parentElement) {
      this.parentElement.addEventListener('click', function () {
        const btn = document.querySelector('.btn--update-counter');
        if (!btn) return;
        if (btn instanceof HTMLElement) {
          console.log(btn.dataset);
          // const { updateTo = 0 } = btn.dataset;
          // if (+updateTo > 0) handler(+updateTo);
        }
      });
    }
  }

  generateMarkup() {
    return `
        <div class="counter">
        <button class="btn btn--update-counter" data-update-to="${
          this.data - 1
        }">–</button>
        <button class="btn btn--update-counter" data-update-to="${
          this.data + 1
        }">+</button>
        </div>
    `;
  }
  // kiir() {}
  render() {
    const markup = this.generateMarkup();
    this.parentElement?.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new counterView();
