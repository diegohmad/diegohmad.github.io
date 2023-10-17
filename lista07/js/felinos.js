nome = localStorage.getItem("nome");
vetNome = nome.split(" ");
localStorage.setItem("contador", 0);
document.getElementById("gato1").addEventListener("click", gato1);
document.getElementById("gato2").addEventListener("click", gato2);

function gato1() {
    alert(`Oi ${vetNome[0]}, Tudo bem com você?`);
}

function gato2() {
    contador = parseInt(localStorage.getItem("contador"));
    contador++;
    localStorage.setItem("contador", contador);
    document.getElementById("carinhos").innerHTML = contador;
}

const gato3 = document.getElementById('gato3');
const gato3SrcOriginal = gato3.src;
const novaImagemSrc = 'Imagens/gato06.gif';

gato3.addEventListener('mouseenter', function() {
    gato3.src = novaImagemSrc;
});

gato3.addEventListener('mouseleave', function() {
    gato3.src = gato3SrcOriginal;
});

const gato4 = document.getElementById('gato4');
const textoGato4 = document.getElementById('textoGato4');
const textoOriginal = textoGato4.innerHTML;
const novoTexto = 'Ai, pare de fazer cócegas!';

gato4.addEventListener('mouseenter', function() {
    textoGato4.innerHTML = novoTexto;
});

gato4.addEventListener('mouseleave', function() {
    textoGato4.innerHTML = textoOriginal;
});

const gerarNumeroBtn = document.getElementById('gerarNumeroBtn');
const numeroSorteInput = document.getElementById('numeroSorte');

gerarNumeroBtn.addEventListener('click', function() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    numeroSorteInput.value = numeroAleatorio;
});
