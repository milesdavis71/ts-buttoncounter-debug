class counterView {
    constructor() {
        this.parentElement = document.querySelector('.render');
        this._data = 0;
    }
    update(data) {
        this._data = data;
    }
    addHandlerUpdateCounter(handler) {
        if (this.parentElement) {
            this.parentElement.addEventListener('click', function (e) {
                // Itt lehet HTMLButtonElement és HTMLInputElement is.
                // Az input a tágabb, mert input lehet type szerint button,
                // de sokminden más is (text, submit, search, date, stb.)
                const buttonTarget = e.target;
                // A closest metódus mindkét buttont ki tudja jelölni, az azonos selector alapján.
                // amelyik gomb klikkelve lesz, abbón jön be a data-update-to-ban lévő adat.
                const btn = buttonTarget.closest('.btn--update-counter');
                if (!btn)
                    return;
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
    <button class="btn btn--update-counter" data-update-to="${this._data - 1}"><strong>–</strong></button>
    <button class="btn btn--update-counter" data-update-to="${this._data + 1}"><strong>+</strong></button>
    `;
    }
    render(data) {
        var _a;
        this._data = data;
        const markup = this.generateMarkup();
        this.clear();
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', markup);
    }
    clear() {
        if (this.parentElement) {
            this.parentElement.innerHTML = '';
        }
    }
}
export default new counterView();
//# sourceMappingURL=view.js.map