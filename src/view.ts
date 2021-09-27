let parentElement = document.querySelector('.render');
let datainView: number = 0;

export const addHandlerUpdateCounter = (handler: Function) => {
  if (parentElement) {
    parentElement.addEventListener('click', e => {
      const buttonCounter = e.target as HTMLInputElement;
      const btn = buttonCounter.closest('.btn--update-counter');
      if (!btn) return;
      if (btn instanceof HTMLElement) {
        const { updateTo } = btn.dataset;

        if (updateTo && 0 <= +updateTo) {
          handler(+updateTo);
        }
      }
    });
  }
};

const generateMarkup = () => {
  return `
    <button class="btn btn--update-counter" data-update-to=${
      datainView - 1
    }>-</button>
  <button class="btn btn--update-counter" data-update-to=${
    datainView + 1
  }>+</button>
  <span>${datainView}</span>
  `;
};

export const render = (dataFromModel: number) => {
  datainView = dataFromModel;
  const markup = generateMarkup();
  parentElement?.insertAdjacentHTML('afterbegin', markup);
};

export const clear = () => {
  if (parentElement) {
    parentElement.innerHTML = '';
  }
};
