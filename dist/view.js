class counterView {
    constructor() {
        this.parentElement = document.querySelector('.render');
        this.data = 0;
    }
    addHandlerUpdateCounter() {
        if (this.parentElement) {
            this.parentElement.addEventListener('click', function () {
                const btn = document.querySelector('.btn--update-counter');
                if (!btn)
                    return;
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
        <button class="btn btn--update-counter" data-update-to="${this.data - 1}">–</button>
        <button class="btn btn--update-counter" data-update-to="${this.data + 1}">+</button>
        </div>
    `;
    }
    // kiir() {}
    render() {
        var _a;
        const markup = this.generateMarkup();
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', markup);
    }
}
export default new counterView();
//# sourceMappingURL=view.js.map