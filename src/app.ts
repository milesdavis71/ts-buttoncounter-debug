
window.addEventListener('load', function () {
    let counter = 0
    const btn = document.querySelector('button');
    btn?.addEventListener('click', function () {
        counter++;
        console.log(counter)
    })


    
})

// btn?.addEventListener('click', function (event) {
//   console.log(event.type);
// });
