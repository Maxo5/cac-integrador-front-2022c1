const descuento = {
    "1": 0.2,
    "2": 0.5,
    "3": 0.85
};

function borrar() {
    const form = document.getElementById("form");
    form.reset();
}

function calcTotal() {
    const form = document.getElementById("form");
    const cantidad = form.elements["cant"];
    const categoria = form.elements["cat"];
    const cat = categoria.options[categoria.selectedIndex];

    let total = form.elements["total"];
    total.value = "Total a pagar: $" + (cantidad.value * 200 * descuento[cat.value]);
}
