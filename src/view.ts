class counterView {
  parentElement = document.querySelector('.counter');
  data: number = 0;

  // addHandlerUpdateCounter(handler) {

  //     if(this.parentElement){
  //         this.parentElement.addEventListener('click', function () {
  //             const btn = document.querySelector('.btn--update-servings');
  //             if (!btn) return;
  //             if (btn instanceof HTMLElement)
  //             {
  //                 const { updateTo=0 } = btn.dataset;
  //                 if (+updateTo > 0) handler(+updateTo);

  //             }

  //           });
  //     }
  //   }

  generateMarkup() {
    return `
        <<div class="counter">
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
  kiir() {
    console.log('huhu');
  }
}

export default new counterView();
