let count = 0;
const button = document.querySelector('.btn-plus1');
console.log(button);
button?.addEventListener('click', function () {
  count++;
  console.log(count);
});
