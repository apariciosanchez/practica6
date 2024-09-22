let parrafo = document.getElementById("miparrafo");
console.log(parrafo.textContent);

let boton = document.getElementById("miboton");
boton.addEventListener("click", function() {
    parrafo.textContent = "texto actualizado";
    console.log(parrafo.textContent);
});
