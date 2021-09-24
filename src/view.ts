class counterView {
  parentElement = document.querySelector('.render');

  _data: number = 0;

  update(data: number) {
    this._data = data;
  }

  // publisher-subscriber pattern –> ez a Publisher; azt nézi, hogy történik-e klikkelés,
  // ha történik, akkor a paraméterként átadott handler függvénynek (controlCounter)
  // átadja az updateTo értéket, ami ott newCounter neve fog felvenni.
  addHandlerUpdateCounter(handler: Function) {
    if (this.parentElement) {
      this.parentElement.addEventListener('click', function (e) {
        // Itt lehet HTMLButtonElement és HTMLInputElement is.
        // Az input a tágabb, mert input lehet type szerint button,
        // de sokminden más is (text, submit, search, date, stb.)
        const buttonTarget = e.target as HTMLInputElement;
        // A closest metódus mindkét buttont ki tudja jelölni, az azonos selector alapján.
        // amelyik gomb klikkelve lesz, abbón jön be a data-update-to-ban lévő adat.
        const btn = buttonTarget.closest('.btn--update-counter');
        if (!btn) return;
        if (btn instanceof HTMLElement) {
          // A HTMLElement.dataset WEB API interfészen egyéni adat értékek olvashatók ki
          // egy html elemből, jelen esetben a button input típusú elemből.
          // a button input element objektum dataset tulajdonságából kiolvasható
          // a data-update-to-ban lévő adat, amit így lehet meghívni:
          // btn.dataset.UpdateTo  Az updateTo a data-update-to-ból képződik.
          const { updateTo } = btn.dataset;
          if (updateTo) {
            if (+updateTo >= 0) {
              handler(+updateTo);
            }
          }
        }
      });
    }
  }
  generateMarkup() {
    return `
    <span>${this._data}</span>
    <span class="recipe__info-text">servings</span>
    <button class="btn btn--update-counter" data-update-to="${
      this._data - 1
    }"><strong>–</strong></button>
    <button class="btn btn--update-counter" data-update-to="${
      this._data + 1
    }"><strong>+</strong></button>
    `;
  }
  render(data: number) {
    // Itt érkezik be a modellből a data a renderelésre.
    this._data = data;

    const markup = this.generateMarkup();
    // this.clear();
    this.parentElement?.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    if (this.parentElement) {
      this.parentElement.innerHTML = '';
    }
  }
}

export default new counterView();
