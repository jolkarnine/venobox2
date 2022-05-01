// let btn = document.querySelectorAll('button')
// // let data = btn.dataset.url
// let body = document.querySelector('body')

// let barr = Array.from(btn)

// barr.map(function (e) {
//     e.addEventListener('click', function (f) {
//         body.innerHTML += `<div class="imgbox">
//         <img src="${f.target.dataset.img}" alt="Pic">
//         <button class="cross">x</button>
//     </div>`

//         let imgbox = document.querySelector('.imgbox')
//         let cross = document.querySelector('.cross')

//         cross.addEventListener('click', function () {
//             imgbox.remove()
//         })
//     })
// })












let skin = document.querySelector('body')

let imgbox = document.querySelector('.imgbox')

skin.addEventListener('click', function (i) {

    if (i.target.classList[0] == 'one') {
        
        imgbox.classList.add('imgbox2')
        imgbox.innerHTML += `<img src="${i.target.dataset.img}" alt="Pic">
         <button class="cross">x</button>`
    }else{
        imgbox.classList.remove('imgbox2')
        imgbox.innerHTML=' '
    }

})









// if (i.target.classList[0] == 'one') {

//     console.log(i.target.classList)
//     body.innerHTML += `<img src="${i.target.dataset.img}" alt="Pic">
//     <button class="cross">x</button>`
// }