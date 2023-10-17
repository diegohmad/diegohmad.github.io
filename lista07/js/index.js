window.addEventListener("load", function () {
    alert("Olá! Seja bem-vindo!");
});

document.getElementById("btnEntrar").addEventListener("click", validar);

function validar() {
    var nome = document.getElementById("txtNome").value.trim();

    if (nome == "") {
        alert("Por favor, digite seu nome.");
        return false;
    } else {
        vetPalavras = nome.split(" ");
        if (vetPalavras.length > 1) {
            nomeSobrenome = `${vetPalavras[0]} ${vetPalavras[vetPalavras.length - 1]}`;
            localStorage.setItem("nome", nomeSobrenome);
            window.open("menu.html", "_self");
        } else {
            alert("Nome inválido.\nPor favor, digite seu NOME e SOBRENOME separados por um espaço.");
        }
    }
}