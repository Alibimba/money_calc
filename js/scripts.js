function sum(odin, dva, tri, input) {
    let d = Number(odin) + Number(dva) + Number(tri);
    input.value = d;
}
function sv(zp,trat, inputSV) {
    let d = Number(zp) - Number(trat);
    console.log(zp, trat);
    inputSV.value = d;
}

let odin = document.querySelector('#o');
let odinT = document.querySelector('#a');
let dva = document.querySelector('#oo');
let dvaT = document.querySelector('#aa');
let tri = document.querySelector('#ooo');
let triT = document.querySelector('#aaa');
let vivodZP = document.querySelector('#itogo');
let vivodTRAT = document.querySelector('#itogo1');
let inputSV = document.querySelector('#itogoSV');
let proc = document.querySelector('#ss');
let proc1 = document.querySelector('#sss');
let svinota = document.querySelector('#svinota');

let a = Number(odin.value);
let b = Number(dva.value);
let c = Number(tri.value);
let d = 0;

odin.addEventListener('input', function () {
    sum(odin.value, dva.value, tri.value, vivodZP);
    sv(vivodZP.value, vivodTRAT.value, inputSV);
})
dva.addEventListener('input', function () {
    sum(odin.value, dva.value, tri.value, vivodZP)
    sv(vivodZP.value, vivodTRAT.value, inputSV);
})
tri.addEventListener('input', function () {
    sum(odin.value, dva.value, tri.value, vivodZP)
    sv(vivodZP.value, vivodTRAT.value, inputSV);
})
odinT.addEventListener('input', function () {
    sum(odinT.value, dvaT.value, triT.value, vivodTRAT)
    sv(vivodZP.value, vivodTRAT.value, inputSV);
})
dvaT.addEventListener('input', function () {
    sum(odinT.value, dvaT.value, triT.value, vivodTRAT)
    sv(vivodZP.value, vivodTRAT.value, inputSV);
})
triT.addEventListener('input', function () {
    sum(odinT.value, dvaT.value, triT.value, vivodTRAT)
    sv(vivodZP.value, vivodTRAT.value, inputSV);
})
proc.oninput = function() {
    proc1.innerHTML = proc.value
    let vsego = inputSV.value * proc.value / 100
    console.log(inputSV.value)
    svinota.innerHTML = vsego
};

