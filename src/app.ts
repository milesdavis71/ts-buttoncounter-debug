
window.addEventListener('load', function () {
    const counterContainer = document.querySelector('.count')
    
    let counter = 0
    const btn = document.querySelector('button');
    btn?.addEventListener('click', function () {
        const text = document.querySelectorAll('p')
        for (let i = 0; i < text.length; i++) {
            text[i].innerHTML = '';
        }
   counter++;
            if(counterContainer){
                counterContainer.insertAdjacentHTML("beforeend", `<p>${counter}</p>`)
                
            }
           

  
        


    })
    
   
})



// btn?.addEventListener('click', function (event) {
//   console.log(event.type);
// });
