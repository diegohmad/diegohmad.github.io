window.addEventListener('load', function () {

    // Obter elementos de áudio
    var audioLoop = document.getElementById('audioLoop');
    var audioBotao = document.getElementById('audioBotao');
    var auddioErro = document.getElementById('audioErro');
    var audioOk = document.getElementById('audioOk');

    // Iniciar áudio em loop
    audioLoop.play();

    document.getElementById("voltar").addEventListener("click", function () {
        audioBotao.play();
        setTimeout(function () {
            window.location.href = "login.html";
        }, 2000);
    });

    document.getElementById("cadastrar").addEventListener("click", function () {
        var user = document.getElementById("user").value;
        var pwd = document.getElementById("password").value;
        var checkPwd = document.getElementById("passwordCheck").value;

        if (user === "" || pwd === "" || checkPwd === "") {
            auddioErro.play();
            alertWifi("Preencha todos os campos!", false, 0, "", 30, "");
        } else if (pwd !== checkPwd) {
            auddioErro.play();
            alertWifi("As senhas não conferem", false, 0, "", 30, "");
        } else if (!isValidPassword(pwd)) {
            auddioErro.play();
            alertWifi("A senha não atende aos requisitos mínimos de segurança.", false, 0, "", 30, "");
        } else {
            var vetUsuarios = localStorage.getItem("vetUsuarios") || "[]";
            var vet = JSON.parse(vetUsuarios);

            var usuarioExistente = vet.find(function (usuario) {
                return usuario.nome === user;
            });

            if (usuarioExistente) {
                auddioErro.play();
                alertWifi("Usuário já cadastrado. Por favor, escolha outro nome de usuário.", false, 0, "", 30, "");
            } else {
                var novoUsuario = { nome: user, senha: pwd };
                vet.push(novoUsuario);
                localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                audioOk.play();
                alertWifi("Cadastrado com sucesso", false, 0, "", 30, "");

                document.getElementById("user").value = "";
                document.getElementById("password").value = "";
                document.getElementById("passwordCheck").value = "";

                // Redirecionar para o login após 5 segundos
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 5000);
            }
        }
    });

    function isValidPassword(password) {
        // Expressão regular para validar a senha
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/;
        return regex.test(password);
    }
});
