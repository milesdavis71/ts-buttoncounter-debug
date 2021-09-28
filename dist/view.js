class Render {
    constructor() {
        this.counterView = 0;
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
  <button class="btn btn--update-counter" data-update-to=${this.counterView - 1}>–</button>
        <span>${this.counterView}</span>
        <button class="btn btn--update-counter" data-update-to=${this.counterView + 1}>+</button>
        `;
    }
    render(counterModelValue) {
        var _a;
        this.counterView = counterModelValue;
        const markup = this.generateMarkup();
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', markup);
    }
    clear() {
        if (this.parentElement)
            this.parentElement.innerHTML = '';
    }
}
export default new Render();
//# sourceMappingURL=view.js.map