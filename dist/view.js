class Render {
    constructor() {
        this.counterViewValue = 0;
        this.parentElement = document.querySelector('.render');
    }
    addHandlerUpdateCounter(handler) {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
            const buttonUpdate = e.target;
            const btn = buttonUpdate.closest('.btn--update-counter');
            if (!btn)
                return;
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
    <button class="btn btn--update-counter" data-update-to="${this.counterViewValue - 1}"><strong>–</strong></button>
    <button class="btn btn--update-counter" data-update-to="${this.counterViewValue + 1}"><strong>+</strong></button>
    `;
    }
    clear() {
        if (this.parentElement) {
            this.parentElement.innerHTML = '';
        }
    }
    render(counterStateValue) {
        this.counterViewValue = counterStateValue;
        const markup = this.generateMarkup();
        if (this.parentElement) {
            this.parentElement.insertAdjacentHTML('afterbegin', markup);
        }
    }
}
export default new Render();
//# sourceMappingURL=view.js.map