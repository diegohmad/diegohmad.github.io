window.addEventListener("load", function () {

    // A
    document.getElementById("validarDataNascimento").addEventListener("click", function () {
        var padrao = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
        var info = document.getElementById("dataNascimento").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // B
    document.getElementById("validarCPF").addEventListener("click", function () {
        var padrao = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
        var info = document.getElementById("cpf").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // C 
    document.getElementById("validarMatricula").addEventListener("click", function () {
        var padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;
        var info = document.getElementById("matricula").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // D 
    document.getElementById("validarCodigoDisciplina1").addEventListener("click", function () {
        var padrao = /^(MT|mt)-\d{2}\.\d{3}-IFTM$/;
        var info = document.getElementById("codigoDisciplina1").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // E
    document.getElementById("validarCodigoDisciplina2").addEventListener("click", function () {
        var padrao = /^(MT)-\d{2}\.\d{3}-IFTM$/i;
        var info = document.getElementById("codigoDisciplina2").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // F
    document.getElementById("validarCodigoDisciplina3").addEventListener("click", function () {
        var padrao = /^(MT|mt)-\d{2}\.\d{3}-IFTM$/i;
        var info = document.getElementById("codigoDisciplina3").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // G
    document.getElementById("validarNomeCampus").addEventListener("click", function () {
        var padrao = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/i;
        var info = document.getElementById("nomeCampus").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // H
    document.getElementById("validarTelefone1").addEventListener("click", function () {
        var padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

        var info = document.getElementById("telefone1").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // I
    document.getElementById("validarTelefone2").addEventListener("click", function () {
        var padrao = /^\(\d{2,3}\) ?\d{4,5}-\d{4}$/;

        var info = document.getElementById("telefone2").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // J
    document.getElementById("validarAltura").addEventListener("click", function () {
        var padrao = /^(1.[3-9][0-9]?|2.[0-4][0-9]?|2.5|1,[3-9][0-9]?|2,[0-4][0-9]?|2,5)$/;

        var info = document.getElementById("altura").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // K

    document.getElementById("validarFaturamento").addEventListener("click", function () {
        var padrao = /^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/;

        var info = document.getElementById("faturamento").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 0, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });

    // L
    //expressao regular para validar cronometro no formato HH:MM:SS:CC
    document.getElementById("validarCronometro").addEventListener("click", function () {
        var padrao = /^([0-1][0-9]|[2][0-3]):[0-5][0-9]:[0-5][0-9]:[0-9][0-9]$/;

        var info = document.getElementById("cronometro").value;

        if (padrao.test(info))
            alertWifi("Válido!", false, 3, "", 100, "");
        else
            alertWifi("Inválido!", false, 3, "", 100, "");
    });
});
