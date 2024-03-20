window.addEventListener('load', function() {
    var op = document.getElementById('selecao').value;
    //se valor de selecao mudar no html, buscar novamente os dados
    document.getElementById('selecao').addEventListener('change', function() {
        op = document.getElementById('selecao').value;
        if (op == 1) {
            listarEstudantes();
        } else if (op == 2) {
            listarEstudantesHomens();
        } else if (op == 3) {
            listarEstudantesMulheres();
        } else if (op == 4) {
            listarEstudantesAprovados();
        } else if (op == 5) {
            listarEstudantesReprovados();
        } else if (op == 6) {
            todosAprovados();
        } else if (op == 7) {
            notaMedia();
        } else if (op == 0) {
            document.getElementById('output').innerHTML = '';
        }
    });
});

//listar todos os estudantes
function listarEstudantes() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            data.forEach(function(aluno) {
                output += `
                        <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                `;
            });
            document.getElementById('output').innerHTML = output;
        });
}

// listar estudantes homens por aluno.sexo M ou F
function listarEstudantesHomens() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            data.forEach(function(aluno) {
                if (aluno.sexo == 'M') {
                    output += `
                        <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                    `;
                }
            });
            document.getElementById('output').innerHTML = output;
        });
}

// listar estudantes mulheres por aluno.sexo M ou F
function listarEstudantesMulheres() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            data.forEach(function(aluno) {
                if (aluno.sexo == 'F') {
                    output += `
                        <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                    `;
                }
            });
            document.getElementById('output').innerHTML = output;
        });
}

// listar estudantes aprovados onde aluno.notabim1 + aluno.notabim2 >= 60
function listarEstudantesAprovados() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            data.forEach(function(aluno) {
                if (aluno.notaBim1 + aluno.notaBim2 >= 60) {
                    output += `
                        <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                    `;
                }
            });
            document.getElementById('output').innerHTML = output;
        });
}

// listar estudantes reprovados onde aluno.notabim1 + aluno.notabim2 < 60
function listarEstudantesReprovados() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            data.forEach(function(aluno) {
                if (aluno.notaBim1 + aluno.notaBim2 < 60) {
                    output += `
                        <p>${aluno.nome}: ${aluno.notaBim1} (bimestre 1) e ${aluno.notaBim2} (bimestre 2) = ${aluno.notaBim1+aluno.notaBim2};</p>
                    `;
                }
            });
            document.getElementById('output').innerHTML = output;
        });
}

//Todos os alunos aprovados? Responder com uma mensagem em output se é verdade ou não
function todosAprovados() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            var aprovados = true;
            data.forEach(function(aluno) {
                if (aluno.notaBim1 + aluno.notaBim2 < 60) {
                    aprovados = false;
                }
            });
            if (aprovados) {
                output = '<p>Todos os alunos foram aprovados!</p>';
            } else {
                output = '<p>Nem todos os alunos foram aprovados!</p>';
            }
            document.getElementById('output').innerHTML = output;
        });
}

//mostrar a nota média da turma
function notaMedia() {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var output = '';
            var media = 0;
            data.forEach(function(aluno) {
                media += (aluno.notaBim1 + aluno.notaBim2);
            });
            media = media / data.length;
            //soltar a nota com duas casas decimais
            media = media.toFixed(2);
            output = `<p>Nota média = ${media}</p>`;
            document.getElementById('output').innerHTML = output;
        });
}

