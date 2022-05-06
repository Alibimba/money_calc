function sum(odin, dva, tri, input) {
    let d = Number(odin) + Number(dva) + Number(tri);
    console.log(a + '+' + b + '=' + (a + b));
    input.innerHTML = d;
}

let odin = document.querySelector('#o');
let dva = document.querySelector('#oo');
let tri = document.querySelector('#ooo');
let vivodZP = document.querySelector('#itogo');

let a = Number(odin.value);
let b = Number(dva.value);
let c = Number(tri.value);
let d = 0;

odin.addEventListener('input', function () {
    sum(odin.value, dva.value, tri.value, vivodZP)
})
dva.addEventListener('input', function () {
    sum(odin.value, dva.value, tri.value, vivodZP)
})
tri.addEventListener('input', function () {
    sum(odin.value, dva.value, tri.value, vivodZP)
})
