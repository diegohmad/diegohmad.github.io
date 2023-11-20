window.addEventListener('load', function () {
    document.getElementById("entrar").addEventListener("click", function () {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        if (user.trim() === "" || password.trim() === "") {
            alert("Por favor, insira usuário e senha.");
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
            alert("Usuário não encontrado ou senha incorreta.");
        }
    });

    document.getElementById("cadastrar").addEventListener("click", function () {
        window.location.href = "cadastrar.html";
    });
});
