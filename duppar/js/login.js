window.addEventListener('load', function () {
    // Obter elementos de áudio
    var audioLoop = document.getElementById('audioLoop');
    var audioBotao = document.getElementById('audioBotao');
    var auddioErro = document.getElementById('audioErro');

    // Iniciar áudio em loop
    audioLoop.play();

    document.getElementById("entrar").addEventListener("click", function () {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        audioBotao.play();
        if (user === "" || password === "") {
            alertWifi("Preencha todos os campos!", false, 0, "", 30, "");
        } else {
            // Simulação do armazenamento de usuários (você pode substituir isso pelo seu código real)
            var vetUsuarios = localStorage.getItem("vetUsuarios") || "[]";
            var usuarios = JSON.parse(vetUsuarios);

            var usuarioEncontrado = usuarios.find(function (usuario) {
                return usuario.nome === user && usuario.senha === password;
            });

            if (usuarioEncontrado) {
                // Usuário autenticado, redirecione para index.html
                //esperar 3s antes de redirecionar para jogo.html
                setTimeout(function () {
                    window.location.href = "jogo.html";
                }, 3000);
            } else {
                // Usuário não encontrado ou senha incorreta
                auddioErro.play();
                alertWifi("Usuário não encontrado ou senha incorreta.", false, 0, "", 30, "");
            }
        }

    });

    this.document.getElementById("fechar").addEventListener("click", function () {
        audioBotao.play();
        setTimeout(function () {
            window.close();
        }, 3000);
    });

    document.getElementById("cadastrar").addEventListener("click", function () {
        // Redirecione para cadastro.html ao clicar em cadastrar
        audioBotao.play();
        setTimeout(function () {
            window.location.href = "cadastrar.html";
        }, 3000);
    });

});