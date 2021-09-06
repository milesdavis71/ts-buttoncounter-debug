"use strict";
let count = 0;
const button = document.querySelector('.btn-plus1');
console.log(button);
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    count++;
    console.log(count);
});
//# sourceMappingURL=app.js.map