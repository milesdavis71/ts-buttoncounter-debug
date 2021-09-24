let parentElement = document.querySelector('.render');

let _data: number = 0;

const update = function (data: number) {
  _data = data;
};

// publisher-subscriber pattern –> ez a Publisher; azt nézi, hogy történik-e klikkelés,
// ha történik, akkor a paraméterként átadott handler függvénynek (controlCounter)
// átadja az updateTo értéket, ami ott newCounter neve fog felvenni.
export const addHandlerUpdateCounter = function (handler: Function) {
  if (parentElement) {
    parentElement.addEventListener('click', function (e) {
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
};
const generateMarkup = function () {
  return `
    <span>${_data}</span>
    <span class="recipe__info-text">servings</span>
    <button class="btn btn--update-counter" data-update-to="${
      _data - 1
    }"><strong>–</strong></button>
    <button class="btn btn--update-counter" data-update-to="${
      _data + 1
    }"><strong>+</strong></button>
    `;
};
export const render = function (data: number) {
  // Itt érkezik be a modellből a data a renderelésre.
  _data = data;

  const markup = generateMarkup();
  // this.clear();
  parentElement?.insertAdjacentHTML('afterbegin', markup);
};

export const clear = function () {
  if (parentElement) {
    parentElement.innerHTML = '';
  }
};
