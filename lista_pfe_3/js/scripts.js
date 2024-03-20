window.addEventListener('load', function() {
    var op = document.getElementById('selecao').value;

    function buscarDadosEProcessar(url, processarFuncao) {
        fetch(url)
            .then(response => response.json())
            .then(dados => {
                processarFuncao(dados);
            });
    }

    function exibirResultado(resultado) {
        document.getElementById('output').innerHTML = resultado;
    }

    function listarAlunos(dados, funcaoFiltro) {
        var resultado = '';
        dados.forEach(function(aluno) {
            if (funcaoFiltro(aluno)) {
                resultado += `
                    <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                `;
            }
        });
        exibirResultado(resultado);
    }

    function listarEstudantes() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listarAlunos(dados, () => true);
        });
    }

    function filtrarPorSexo(sexo) {
        return function(aluno) {
            return aluno.sexo === sexo;
        }
    }

    function listarAlunosHomens() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listarAlunos(dados, filtrarPorSexo('M'));
        });
    }

    function listarAlunas() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listarAlunos(dados, filtrarPorSexo('F'));
        });
    }

    function listarAlunosAprovados() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listarAlunos(dados, function(aluno) {
                return aluno.notaBim1 + aluno.notaBim2 >= 60;
            });
        });
    }

    function listarAlunosReprovados() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listarAlunos(dados, function(aluno) {
                return aluno.notaBim1 + aluno.notaBim2 < 60;
            });
        });
    }

    function todosAprovados() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            var aprovados = dados.every(function(aluno) {
                return aluno.notaBim1 + aluno.notaBim2 >= 60;
            });
            exibirResultado(aprovados ? '<p>Todos os alunos foram aprovados!</p>' : '<p>Nem todos os alunos foram aprovados!</p>');
        });
    }

    function mediaNotas() {
        buscarDadosEProcessar('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            var media = dados.reduce(function(acc, aluno) {
                return acc + aluno.notaBim1 + aluno.notaBim2;
            }, 0) / dados.length;
            media = media.toFixed(2);
            exibirResultado(`<p>Nota média = ${media}</p>`);
        });
    }

    document.getElementById('selecao').addEventListener('change', function() {
        op = document.getElementById('selecao').value;
        switch (op) {
            case '1':
                listarEstudantes();
                break;
            case '2':
                listarAlunosHomens();
                break;
            case '3':
                listarAlunas();
                break;
            case '4':
                listarAlunosAprovados();
                break;
            case '5':
                listarAlunosReprovados();
                break;
            case '6':
                todosAprovados();
                break;
            case '7':
                mediaNotas();
                break;
            case '0':
                exibirResultado('');
                break;
            default:
                exibirResultado('<p>Opção inválida!</p>');
        }
    });
});
