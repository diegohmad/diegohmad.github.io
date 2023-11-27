window.addEventListener("load", function () {
    var audioMusic = document.getElementById('audioMusic');
    var audioBotao = document.getElementById('audioBotao');
    var auddioFatia = document.getElementById('audioFatia');
    var audioErro = document.getElementById('audioErro');

    // Iniciar áudio em loop
    audioMusic.play();

    let minutos = 0;
    let segundos = 0;
    let cronometro;
    let timerNumber;
    let acertos = 0;
    let erros = 0;
    let totalPares = 0;
    let numeroSorteado = 0;
    let numeroClicavel = true;

    document.getElementById("numero").addEventListener("click", function () {
        if (numeroSorteado !== 0 && numeroClicavel) {
            if (numeroSorteado % 2 == 0) {
                auddioFatia.play();
                somaAcertos();
            } else {
                audioErro.play();
                somaErros();
            }

            numeroClicavel = false;
        }
    });

    document.getElementById("nivel").addEventListener("change", function () {
        let nivel = document.getElementById("nivel").value;

        if (nivel == 1) {
            minutos = 1;
            segundos = 30;
        } else if (nivel == 2) {
            minutos = 1;
            segundos = 10;
        } else if (nivel == 3) {
            minutos = 0;
            segundos = 45;
        }

        preencherCronometro(minutos, segundos);
    });

    document.getElementById("btnPause").addEventListener("click", function () {
        audioBotao.play();
        clearInterval(cronometro);
        clearInterval(timerNumber);
    });

    document.getElementById("btnPlay").addEventListener("click", function () {
        audioBotao.play();
        let nivel = document.getElementById("nivel").value;
        let interval;
        if (nivel == 1) {
            interval = 1000;
        } else if (nivel == 2) {
            interval = 750;
        } else if (nivel == 3) {
            interval = 500;
        } else {
            alertWifi("Selecione um nível", false, 0, "", 30, "");
            return;
        }
        timeGame(minutos, segundos);
        timerNumber = setInterval(PreencheNumero, interval);
    });

    document.getElementById("btnReturn").addEventListener("click", function () {
        audioBotao.play();
        setTimeout(function () {
            window.location.href = "index.html";
        }, 3000);
    });

    document.getElementById("btnStop").addEventListener("click", function () {
        audioBotao.play();
        setTimeout(function () {
            location.reload();
        }, 3000);
    });

    function timeGame(min, sec) {
        minutos = min;
        segundos = sec;
        cronometro = setInterval(() => { temporizador(); }, 1000);
    }

    function temporizador() {
        if (minutos == 0 && segundos == 0) {
            audioBotao.play();
            alertWifi("Fim de Jogo", false, 0, "", 30, "");
            clearInterval(cronometro);
            clearInterval(timerNumber);
            return;
        }
        if (segundos == 0) {
            segundos = 59;
            minutos--;
        } else {
            segundos--;
        }
        preencherCronometro(minutos, segundos);
    }

    function preencherCronometro(min, sec) {
        document.getElementById("minutos").innerHTML = min > 9 ? min : "0" + min;
        document.getElementById("segundos").innerHTML = sec > 9 ? sec : "0" + sec;
    }

    function PreencheNumero() {
        numeroSorteado = Math.floor(Math.random() * 100) + 1;
        document.getElementById("numero").style.color = "black";
        document.getElementById("numero").innerHTML = numeroSorteado;
        numeroClicavel = true;
        if (numeroSorteado % 2 == 0) {
            somaPares();
        }
    }

    function somaAcertos() {
        acertos++;
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("numero").style.color = "green";
        preencherPorcentagem();
    }

    function somaErros() {
        erros++;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("numero").style.color = "darkred";
    }

    function somaPares() {
        totalPares++;
        document.getElementById("numeros-pares").innerHTML = totalPares;
        preencherPorcentagem();
    }

    function preencherPorcentagem() {
        let percent = ((acertos / totalPares) * 100).toFixed(2);
        document.getElementById("perc-acertos").innerHTML = percent;
    }
});
