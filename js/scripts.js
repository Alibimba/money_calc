function sum(odin, dva, tri, input) {
    let d = Number(odin) + Number(dva) + Number(tri);
    console.log(a + '+' + b + '=' + (a + b));
    input.innerHTML = d;
}
function sumT(odinT, dvaT, triT, inputT) {
    let f = Number(odinT) + Number(dvaT) + Number(triT);
    console.log(a + '+' + b + '=' + (a + b));
    inputT.innerHTML = f;
}

let odin = document.querySelector('#o');
let odinT = document.querySelector('#a');
let dva = document.querySelector('#oo');
let dvaT = document.querySelector('#aa');
let tri = document.querySelector('#ooo');
let triT = document.querySelector('#aaa');
let vivodZP = document.querySelector('#itogo');
let vivodTRAT = document.querySelector('#itogo1');

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
odinT.addEventListener('input', function () {
    sumT(odinT.value, dvaT.value, triT.value, vivodTRAT)
})
dvaT.addEventListener('input', function () {
    sumT(odinT.value, dvaT.value, triT.value, vivodTRAT)
})
triT.addEventListener('input', function () {
    sumT(odinT.value, dvaT.value, triT.value, vivodTRAT)
})
