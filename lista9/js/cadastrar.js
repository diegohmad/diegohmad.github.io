window.addEventListener('load', function () {

    document.getElementById("voltar").addEventListener("click", function () {
        window.location.href = "login.html";
    });
    
    document.getElementById("cadastrar").addEventListener("click", function () {
        var user = document.getElementById("user").value;
        var pwd = document.getElementById("password").value;
        var checkPwd = document.getElementById("passwordCheck").value;

        if (user === "" || pwd === "" || checkPwd === "") {
            alertWifi("Preencha todos os campos!", false, 0, "", 30, "");
        } else if (pwd === checkPwd) {
            var vetUsuarios = localStorage.getItem("vetUsuarios") || "[]";
            var vet = JSON.parse(vetUsuarios);

            var usuarioExistente = vet.find(function (usuario) {
                return usuario.nome === user;
            });

            if (usuarioExistente) {
                alertWifi("Usuário já cadastrado. Por favor, escolha outro nome de usuário.", false, 0, "", 30, "");
            } else {
                var novoUsuario = { nome: user, senha: pwd };
                vet.push(novoUsuario);
                localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                alertWifi("Cadastrado com sucesso", false, 0, "", 30, "");

                document.getElementById("user").value = "";
                document.getElementById("password").value = "";
                document.getElementById("passwordCheck").value = "";

                // Redirecionar para o login após 5 segundos
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 5000);
            }
        } else {
            alertWifi("As senhas não conferem", false, 0, "", 30, "");
        }
    });
});
