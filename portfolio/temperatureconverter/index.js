let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");
let ran = document.getElementById("ran");
let main = document.getElementById("main");
cel.addEventListener("input", function () {
    let c = this.value;
    if(c>40){
        main.style.backgroundColor = "red";
    }

    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
        // k = k.toFixed(3);
    }

    let k = (c / 1) + 273.15;
    if (!Number.isInteger(k)) {
        k = k.toFixed(3);
    }

    let r = (f / 1) + 459.67;
    if (!Number.isInteger(r)) {

        r = r.toFixed(3);
    }
    fah.value = f;
    kel.value = k;
    ran.value = r;


});
fah.addEventListener("input", function () {
    let f = this.value;
    let c = (f - 32) * 5 / 9;

    if (!Number.isInteger(c)) {
        c = c.toFixed(3);
        // k = k.toFixed(3);
    }

    let k = ((f - 32) * 5 / 9) + 273.15;
    if (!Number.isInteger(k)) {
        k = k.toFixed(3);
    }

    let r = (f / 1) + 459.67;
    if (!Number.isInteger(r)) {

        r = r.toFixed(3);
    }
    cel.value = c;
    kel.value = k;
    ran.value = r;
});
kel.addEventListener("input", function () {
    let k = this.value;
    let c = k - 273.15;
    if (!Number.isInteger(c)) {
        c = c.toFixed(3);
        // k = k.toFixed(3);
    }
    let f = ((k - 273.15) * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
        // k = k.toFixed(3);
    }
    let r = k * 9 / 5;
    if (!Number.isInteger(r)) {

        r = r.toFixed(3);
    }

    cel.value = c;
    fah.value = f;
    ran.value = r;
});

ran.addEventListener("input", function () {
    let r = this.value;
    let c = (r - 491.67) * 5 / 9;
    if (!Number.isInteger(c)) {
        c = c.toFixed(3);
        // k = k.toFixed(3);
    }
    let f = r - 459.67;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
        // k = k.toFixed(3);
    }
    let k = r * 5 / 9;
    if (!Number.isInteger(k)) {
        k = k.toFixed(3);
    }
    cel.value = c;
    fah.value = f;
    kel.value = k;


});