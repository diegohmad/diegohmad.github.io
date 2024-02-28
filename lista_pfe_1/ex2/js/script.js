window.addEventListener('load', function() {
    // Crie a tag <link>
    var linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.type = "text/css";
    linkTag.href = "css/estilos.css";

    // Adicione a tag <link> ao head
    document.head.appendChild(linkTag);

    var titleTag = document.createElement("title");
    titleTag.innerHTML = "Exercício 2";
    document.head.appendChild(titleTag);
    
    vetAges = [10, 21, 31, 40];
    ageUser = 12;
    var p1 = document.createElement("p");
    p1.innerHTML = `Idades = ${vetAges}`;
    document.body.appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerHTML = `Soma das idades = ${sumAges(vetAges)}`;
    document.body.appendChild(p2);
    var p3 = document.createElement("p");
    p3.innerHTML = `Idade informada pelo usuário = ${ageUser}`;
    document.body.appendChild(p3);
    var p4 = document.createElement("p");
    p4.innerHTML = `a) Média das idades = ${averageAges(vetAges)}`;
    document.body.appendChild(p4);
    var p5 = document.createElement("p");
    p5.innerHTML = `b) Maior idade = ${greaterAge(vetAges)}`;
    document.body.appendChild(p5);
    var p6 = document.createElement("p");
    p6.innerHTML = `c) Idades ímpares = ${oddAges(vetAges)}`;
    document.body.appendChild(p6);
    var p7 = document.createElement("p");
    p7.innerHTML = `d) São todos maiores de idade : ${allOfLegalAge(vetAges)}`;
    document.body.appendChild(p7);
    var p8 = document.createElement("p");
    p8.innerHTML = `e) Todos têm a idade acima ou igual ao valor informado pelo usuário = ${allGreaterThen(ageUser, vetAges)}`;
    document.body.appendChild(p8);
    var p9 = document.createElement("p");
    p9.innerHTML = `f) Exibir todas as idades maiores ou iguais à idade informada pelo usuário = ${allEqualOrAbove(ageUser, vetAges)}`;
    document.body.appendChild(p9);
    var p10 = document.createElement("p");
    p10.innerHTML = `g) Exibir média das idades acima da idade informada pelo usuário = ${avarageEqualOrAbove(ageUser, vetAges)}`;
    document.body.appendChild(p10);

    // document.write(`<p>Idades = ${vetAges}</p><br>`);
    // document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p><br>`);
    // document.write(`<p>Idade informada pelo usuário = ${ageUser}</p><br>`);
    // document.write(`<p>a) Média das idades = ${averageAges(vetAges)}</p><br>`);
    // document.write(`<p>b) Maior idade = ${greaterAge(vetAges)}</p><br>`);
    // document.write(`<p>c) Idades ímpares = ${oddAges(vetAges)}</p><br>`);
    // document.write(`<p>d) São todos maiores de idade : ${allOfLegalAge(vetAges)}</p><br>`);
    // document.write(`<p>e) Todos têm a idade acima ou igual ao valor informado pelo usuário = ${allGreaterThen(ageUser, vetAges)}</p><br>`);
    // document.write(`<p>f) Exibir todas as idades maiores ou iguais à idade informada pelo usuário = ${allEqualOrAbove(ageUser, vetAges)}</p><br>`);
    // document.write(`<p>g) Exibir média das idades acima da idade informada pelo usuário = ${avarageEqualOrAbove(ageUser, vetAges)}</p><br>`);
})

//arrow function sumAges
    let sumAges = vet => {
        sum = 0;
        for (let i = 0; i < vet.length; i++) {
            sum += vet[i];
        }
        return sum;
    }

//arrow function averageAges
    let averageAges = vet => {
        sum = sumAges(vet);
        return (sum/vet.length).toFixed(2);
    }

//arrow function greaterAge
    let greaterAge = vet => {
        greater = vet[0];
        for (let i = 1; i < vet.length; i++) {
            if (vet[i] > greater) {
                greater = vet[i];
            }
        }
        return greater;
    }

//arrow function oddAges
    let oddAges = vet => {
        odd = [];
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] % 2 != 0) {
                odd.push(vet[i]);
            }
        }
        return odd;
    }


//arrow function allOfLegalAge
    let allOfLegalAge = vet => {
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] < 18) {
                return false;
            }
        }
        return true;
    }

//arrow function allGreaterThen
    let allGreaterThen = (ageUser, vetAges) => {
        for (let i = 0; i < vetAges.length; i++) {
            if (vetAges[i] < ageUser) {
                return false;
            }
        }
        return true;
    }

//arrow function allEqualOrAbove
    let allEqualOrAbove = (ageUser, vetAges) => {
        let vet = [];
        for (let i = 0; i < vetAges.length; i++) {
            if (vetAges[i] >= ageUser) {
                vet.push(vetAges[i]);
            }
        }
        return vet;
    }

//arrow function avarageEqualOrAbove
    let avarageEqualOrAbove = (ageUser, vetAges) => {
        vet = allEqualOrAbove(ageUser, vetAges);
        return averageAges(vet);
    }