for (var i = 1; i <= 4; i++) {
    var element = document.getElementById(`votosCand${i}`);
    if (element) {
        element.innerHTML = 0;
    }
}

vetorVotos = [0,0,0,0];

fotoCand1 = document.getElementById("fotoCand1");
fotoCand2 = document.getElementById("fotoCand2");
fotoCand3 = document.getElementById("fotoCand3");
fotoCand4 = document.getElementById("fotoCand4");

fotoCand1.addEventListener("click", function () {addVoto(1)});
fotoCand2.addEventListener("click", function () {addVoto(2)});
fotoCand3.addEventListener("click", function () {addVoto(3)});
fotoCand4.addEventListener("click", function () {addVoto(4)});

function addVoto(nroCand) {
    document.getElementById(`votosCand${nroCand}`).innerHTML = ++vetorVotos[nroCand-1];
}
