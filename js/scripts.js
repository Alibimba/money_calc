let odin = document.querySelector('#o');
let dva = document.querySelector('#oo');
let tri = document.querySelector('#ooo');


odin.oninput = function() {
    let a = Number(odin.value);
    let b = Number(dva.value);
    let c = a + b;
    console.log(a + '+' + b + '=' + (a + b));
    vivod.value = c;
};
dva.oninput = function() {
    let a = Number(odin.value);
    let b = Number(dva.value);
    let c = a + b;
    console.log(a + '+' + b + '=' + (a + b));
    vivod.value = c;
};
tri.oninput = function() {
    let a = Number(odin.value);
    let b = Number(dva.value);
    let c = a + b;
    console.log(a + '+' + b + '=' + (a + b));
    vivod.value = c;
};