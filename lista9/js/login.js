window.addEventListener('load', function () {
    document.getElementById("entrar").addEventListener("click", function () {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        if (user.trim() === "" || password.trim() === "") {
            alertWifi("Por favor, insira usuário e senha.", false, 0, "", 30, "");
            return;
        }

        var vetUsuarios = localStorage.getItem("vetUsuarios") || "[]";
        var usuarios = JSON.parse(vetUsuarios);

        var usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.nome === user && usuario.senha === password;
        });

        if (usuarioEncontrado) {
            window.location.href = "jogo.html";
        } else {
            alertWifi("Usuário não encontrado ou senha incorreta.", false, 0, "", 30, "");
        }
    });

    document.getElementById("cadastrar").addEventListener("click", function () {
        window.location.href = "cadastrar.html";
    });
});
