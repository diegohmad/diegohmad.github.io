window.addEventListener("load", function(){

    let minutos = 0;
    let segundos = 0;
    let cronometro;
    let timerNumber;
    let acertos = 0;
    let erros = 0;
    let totalPares = 0;
    let numeroSorteado = 0;
    
    document.getElementById("nivel").addEventListener("change", function(){
        let nivel = document.getElementById("nivel").value;

        if(nivel == 1){
            minutos = 1;
            segundos = 30;
        }else if(nivel == 2){
            minutos = 1;
            segundos = 10;
        }else if(nivel == 3){
            minutos = 0;
            segundos = 45;
        }

        preencherCronometro(minutos, segundos);
    });

    document.getElementById("btnPause").addEventListener("click", function() {
        clearInterval(cronometro);
        clearInterval(timerNumber);
    });

    document.getElementById("btnPlay").addEventListener("click", function(){
        let nivel = document.getElementById("nivel").value;
        let interval;
        if(nivel == 1){
            interval = 1000;
        }else if(nivel == 2){
            interval = 750;
        }else if(nivel == 3){
            interval = 500;
        }else{
            alert("Selecione um nível!");
            return;
        }
        timeGame(minutos, segundos);
        timerNumber = setInterval(PreencheNumero, interval);
    });

    document.getElementById("btnStop").addEventListener("click", function(){
        location.reload();
    });

    function timeGame(min, sec){
        minutos = min;
        segundos = sec;
        cronometro = setInterval(() => {temporizador();} , 1000);
    }

    function temporizador(){
        if(minutos == 0 && segundos == 0){
            alert("Fim de Jogo!");
            clearInterval(cronometro);
            clearInterval(timerNumber);
            return;
        }
        if(segundos == 0){
            segundos = 59;
            minutos--;
        }else{
            segundos--;
        }
        preencherCronometro(minutos, segundos);
    }
    
    function preencherCronometro(min, sec){
        document.getElementById("minutos").innerHTML = min > 9 ? min : "0" + min;
        document.getElementById("segundos").innerHTML = sec > 9 ? sec : "0" + sec;
    }

    function PreencheNumero(){
        numeroSorteado = Math.floor(Math.random()*100)+1;
        document.getElementById("numero").style.color = "black";
        document.getElementById("numero").innerHTML = numeroSorteado;
        if(numeroSorteado%2 == 0){
            somaPares();
        }
    }

    function somaPares(){
        totalPares++;
        document.getElementById("numeros-pares").innerHTML = totalPares;
        preencherPorcentagem();
    }
    
    function somaErros(){
        erros++;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("numero").style.color = "darkred";
    }
    
    function somaAcertos(){
        acertos++;
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("numero").style.color = "green";
        preencherPorcentagem();
    }

    document.getElementById("numero").addEventListener("click", function(){
        if(numeroSorteado != 0){
            if(numeroSorteado % 2 == 0){
                somaAcertos();
            }else{
                somaErros();
            }
        }
    });

    function preencherPorcentagem(){
        let percent = ((acertos/totalPares) * 100).toFixed(2);
        document.getElementById("perc-acertos").innerHTML = percent;
    }
});
