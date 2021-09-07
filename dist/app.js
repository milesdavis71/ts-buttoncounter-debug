"use strict";
window.addEventListener('load', function () {
    let counter = 0;
    const btn = document.querySelector('button');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        counter++;
        console.log(counter);
    });
});
// btn?.addEventListener('click', function (event) {
//   console.log(event.type);
// });
//# sourceMappingURL=app.js.map