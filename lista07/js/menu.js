window.addEventListener("load", lerNome);

function lerNome() {
    var nomeSobrenome = localStorage.getItem("nome");
    if (!nomeSobrenome) {
        showMsg("Usuário não encontrado. Clique em voltar para inserir nome e sobrenome separados por espaço.", "painelErro");
    } else if (nomeSobrenome.split(" ").length == 1) {
        showMsg("Nome incompleto. Clique em voltar para inserir nome e sobrenome separados por um espaço.", "painelErro");
    } else {
        showMsg("", "painelSucesso");
        document.getElementById("nomeUsuario").innerHTML = nomeSobrenome;
    }
}

document.getElementById("btnJogo").addEventListener("click", jogo);

function jogo() {
    window.open("felinos.html", "_self");
}

function showMsg(msg, painel) {
    document.getElementById(painel).classList.remove("invisivel");
    document.getElementById(painel).classList.add("visivel");
    document.getElementById("msgErro").innerHTML = msg;
}