window.addEventListener('load', function() {
    var op = document.getElementById('selecao').value;

    function fetchDataAndProcess(url, processFunction) {
        fetch(url)
            .then(response => response.json())
            .then(dados => {
                processFunction(dados);
            });
    }

    function displayOutput(output) {
        document.getElementById('output').innerHTML = output;
    }

    function listStudents(dados, filterFunction) {
        var output = '';
        dados.forEach(function(aluno) {
            if (filterFunction(aluno)) {
                output += `
                    <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                `;
            }
        });
        displayOutput(output);
    }

    function listarEstudantes() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listStudents(dados, () => true);
        });
    }

    function filterBySex(sex) {
        return function(aluno) {
            return aluno.sexo === sex;
        }
    }

    function listarEstudantesHomens() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listStudents(dados, filterBySex('M'));
        });
    }

    function listarEstudantesMulheres() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listStudents(dados, filterBySex('F'));
        });
    }

    function listarEstudantesAprovados() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listStudents(dados, function(aluno) {
                return aluno.notaBim1 + aluno.notaBim2 >= 60;
            });
        });
    }

    function listarEstudantesReprovados() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            listStudents(dados, function(aluno) {
                return aluno.notaBim1 + aluno.notaBim2 < 60;
            });
        });
    }

    function todosAprovados() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            var aprovados = dados.every(function(aluno) {
                return aluno.notaBim1 + aluno.notaBim2 >= 60;
            });
            displayOutput(aprovados ? '<p>Todos os alunos foram aprovados!</p>' : '<p>Nem todos os alunos foram aprovados!</p>');
        });
    }

    function notaMedia() {
        fetchDataAndProcess('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json', function(dados) {
            var media = dados.reduce(function(acc, aluno) {
                return acc + aluno.notaBim1 + aluno.notaBim2;
            }, 0) / dados.length;
            media = media.toFixed(2);
            displayOutput(`<p>Nota média = ${media}</p>`);
        });
    }

    document.getElementById('selecao').addEventListener('change', function() {
        op = document.getElementById('selecao').value;
        switch (op) {
            case '1':
                listarEstudantes();
                break;
            case '2':
                listarEstudantesHomens();
                break;
            case '3':
                listarEstudantesMulheres();
                break;
            case '4':
                listarEstudantesAprovados();
                break;
            case '5':
                listarEstudantesReprovados();
                break;
            case '6':
                todosAprovados();
                break;
            case '7':
                notaMedia();
                break;
            case '0':
                displayOutput('');
                break;
            default:
                displayOutput('<p>Opção inválida!</p>');
        }
    });
});
