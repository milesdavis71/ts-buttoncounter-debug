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
            this.parentElement.addEventListener('click', function () {
                const btn = document.querySelector('.btn--update-counter');
                if (!btn)
                    return;
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
    <span class="recipe__info-data recipe__info-data--people">${this._data}</span>
    <span class="recipe__info-text">servings</span>
    <button class="btn btn--update-counter" data-update-to="${this._data - 1}">Mínusz</button>
    <button class="btn btn--update-counter" data-update-to="${this._data + 1}">Plusz</button>
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