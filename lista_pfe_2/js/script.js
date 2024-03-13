window.addEventListener('load', function() {

    var linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.type = "text/css";
    linkTag.href = "css/estilos.css";

    // Adicione a tag <link> ao head
    document.head.appendChild(linkTag);
    
    document.write(`<b><p>Vetor: [${vet}]</p></b>`);
    document.write(`<p>Quantidade de elementos do vetor: ${vet.length}</p>`);
    // a
    document.write(`<p><b>a) A soma das idades:</b> ${vet.reduce((element, soma) => soma+= element)}</p>`);

    // b
    document.write(`<p><b>b) A média das idades:</b> ${vet.reduce((element, soma) => soma+= element) / vet.length}</p>`);
    
    // c
    document.write(`<p><b>c) A maior idade é:</b> ${vet.reduce((maior, element)=> element > maior ? maior = element : maior, vet[0])}</p>`);
    
    // d
    document.write(`<p><b>d) As idades ímpares:</b> ${vet.map(element=>element % 2 != 0)}</p>`);

    // e
    document.write(`<p><b>e) Verificar se todos são maiores de idade (idade >= 18):</b> ${vet.every(element=>element >=18)}</p>`);

    // f
    document.write(`<p><b>f) Alguma idade é maior que ${newAge} anos?</b> ${vet.some(element=>element > newAge)}</p>`);

    // g
    document.write(`<p><b>g) Idades maiores ou iguais à ${newAge}:</b> ${vet.filter(element=>element>=newAge)}</p>`);


    // h
    document.write(`<p><b>h) Média das idades das pessoas com idades maiores ou iguais a ${newAge}:</b> ${
        (vet.filter(element=>element>=newAge)
        .reduce((element, soma) => soma+= element) 
        / vet.filter(element=>element>=newAge).length).toFixed(2)} </p>`);
    
});

vet = [56, 12, 83, 25, 67, 42, 91, 7, 38, 19, 73, 5, 88, 34, 60, 3, 77, 50, 94, 10];

newAge = prompt("Digite uma idade: ",20);
