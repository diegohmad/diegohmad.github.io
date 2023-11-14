window.addEventListener('load', function () {
    document.getElementById("entrar").addEventListener("click", function () {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        // Simulação do armazenamento de usuários (você pode substituir isso pelo seu código real)
        var vetUsuarios = localStorage.getItem("vetUsuarios") || "[]";
        var usuarios = JSON.parse(vetUsuarios);

        var usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.nome === user && usuario.senha === password;
        });

        if (usuarioEncontrado) {
            // Usuário autenticado, redirecione para index.html
            window.location.href = "jogo.html";
        } else {
            // Usuário não encontrado ou senha incorreta
            alert("Usuário não encontrado ou senha incorreta.");
        }
    });

    document.getElementById("cadastrar").addEventListener("click", function () {
        // Redirecione para cadastro.html ao clicar em cadastrar
        window.location.href = "cadastrar.html";
    });
});
