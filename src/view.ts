class counterView {
  parentElement = document.querySelector('.render');

  data: number = 0;

  update(data: number) {
    this.data = data;
    const newMarkup = this.generateMarkup();
    console.log(`huhu ${data}`);

    // Updates the changed text
    //   if (
    //     !newEl.isEqualNode(curEl) &&
    //     newEl.firstChild.nodeValue.trim() !== ''
    //   ) {
    //     curEl.textContent = newEl.textContent;
    //   }

    //   // Updates the changed attributes
    //   if (!newEl.isEqualNode(curEl)) {
    //     Array.from(newEl.attributes).forEach(attr => {
    //       curEl.setAttribute(attr.name, attr.value);
    //     });
    //   }
    // };
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
