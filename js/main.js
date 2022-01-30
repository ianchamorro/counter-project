const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const cont = document.getElementById("cont");

let count = 0;

const actualizarCount = () => {
    cont.innerHTML = count;
}

minus.addEventListener("click",() => {
    if (count > 0) {
        count--;
        actualizarCount();
    }
});

plus.addEventListener("click", () => {
    count++;
    actualizarCount();
});