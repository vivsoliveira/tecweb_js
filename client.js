const axios = require("axios");

// pega um novo token
async function pegatoken() {
    const response = await axios.post('https://tecweb-js.insper-comp.com.br/token', {
        username: "victoriaof"
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    console.log("Token:", response.data.accessToken);
    return response.data.accessToken;
}

// pegar exercícios usando o token que muda a cada min
async function pegaexercicios(token) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    const response = await axios.get('https://tecweb-js.insper-comp.com.br/exercicio', config);
    return response.data;
}

async function main() {
    const token = await pegatoken();  // token
    const exercicios = await pegaexercicios(token);  // exercícios

    console.log("Dados dos exercícios:", exercicios);

    // exercicio 1
    let a = exercicios.soma.entrada.a;
    let b = exercicios.soma.entrada.b;
    let resultadoSoma = soma(a, b);
    console.log("Resultado da soma:", resultadoSoma);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/soma`, {
        'resposta': resultadoSoma
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 2
    let string = exercicios['tamanho-string'].entrada.string; 
    let resultadoString = contaString(string);
    console.log("Tamanho da string:", resultadoString);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string`, {
        'resposta': resultadoString
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 3
    let email = exercicios['nome-do-usuario'].entrada.email;
    let resultadoUsuario = pegaUsuario(email);
    console.log("Nome do usuário:", resultadoUsuario);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario`, {
        'resposta': resultadoUsuario
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 4
    let v = exercicios['jaca-wars'].entrada.v;
    let theta = exercicios['jaca-wars'].entrada.theta;
    let resultadoJaca = jacaWars(v, theta);
    console.log("Resultado do jaca wars:", resultadoJaca);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars`, {
        'resposta': resultadoJaca
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 5
    let ano = exercicios['ano-bissexto'].entrada.ano;
    let resultadoBissexto = bissexto(ano);
    console.log("Ano bissexto:", resultadoBissexto);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto`, {
        'resposta': resultadoBissexto
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 6
    let raio = exercicios['volume-da-pizza'].entrada.z;
    let altura = exercicios['volume-da-pizza'].entrada.a;
    let resultadoPizza = volumePizza(raio, altura);
    console.log("Volume da pizza:", resultadoPizza);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza`, {
        'resposta': resultadoPizza
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 7
    let posic_inic = exercicios['mru'].entrada.s0;
    let veloc = exercicios['mru'].entrada.v;
    let t = exercicios['mru'].entrada.t;
    let resultadoMRU = calculaMRU(posic_inic, veloc, t);
    console.log("Posição final do MRU:", resultadoMRU);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/mru`, {
        'resposta': resultadoMRU
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))    

    // exercicio 8
    let stringInvertida = exercicios['inverte-string'].entrada.string;
    let resultadoInvertida = inverteString(stringInvertida);
    console.log("String invertida:", resultadoInvertida);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/inverte-string`, {
        'resposta': resultadoInvertida
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 9
    let objeto = exercicios['soma-valores'].entrada.objeto;
    let resultadoSomaValores = somaValores(objeto);
    console.log("Soma dos valores do objeto:", resultadoSomaValores);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/soma-valores`, {
        'resposta': resultadoSomaValores
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 10
    let n = exercicios['n-esimo-primo'].entrada.n;
    let resultadoPrimo = encontraNesimoPrimo(n);
    console.log("N-ésimo primo:", resultadoPrimo);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo`, {
        'resposta': resultadoPrimo
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 11
    let palavras = exercicios['maior-prefixo-comum'].entrada.strings;
    let resultadoPrefixo = maiorPrefixoComum(palavras);
    console.log("Maior prefixo comum:", resultadoPrefixo);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum`, {
        'resposta': resultadoPrefixo
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 12
    let numeros = exercicios['soma-segundo-maior-e-menor-numeros'].entrada.numeros; 
    let resultadoSomaSegundo = somaSegundoMaiorMenor(numeros);
    console.log("Soma do segundo maior e menor números:", resultadoSomaSegundo);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros`, {
        'resposta': resultadoSomaSegundo
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 13
    let palavras2 = exercicios['conta-palindromos'].entrada.palavras;
    let resultadoPalindromos = contaPalindromos(palavras2);
    console.log("Quantidade de palíndromos:", resultadoPalindromos);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos`, {
        'resposta': resultadoPalindromos
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 14
    let strings2 = exercicios['soma-de-strings-de-ints'].entrada.strings;
    let resultadoSomaStrings = somaStrings(strings2);
    console.log("Soma de strings de ints:", resultadoSomaStrings);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints`, {
        'resposta': resultadoSomaStrings
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 15
    let endpoints = exercicios['soma-com-requisicoes'].entrada.endpoints;
    let resultadoSomaRequisicoes = somaRequisicoes(endpoints);
    console.log("Soma com requisições:", resultadoSomaRequisicoes);
    axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes`, {
        'resposta': resultadoSomaRequisicoes
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))

    // exercicio 16
    let url = exercicios['caca-ao-tesouro'].entrada.inicio;
    let tesouro = cacaAoTesouro(url,token)
    console.log("Tesouro:", tesouro)
    axios.post('https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro', {
        'resposta': tesouro
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))
}

function soma(a, b) {
    return a + b;
}

function contaString(string) {
    return string.length;
}

function pegaUsuario(email){
    return email.split('@')[0];

}

function jacaWars(v, theta) {
    const g = 9.8; 
    const targetDistance = 100; 
    const spreadRadius = 2; 
    const thetaRadians = theta * Math.PI / 180;
    const distance = (v * v * Math.sin(2 * thetaRadians)) / g;
    if (distance < targetDistance - spreadRadius) {
        return -1; // não chegou 
    } else if (distance > targetDistance + spreadRadius) {
        return 1; // passou
    } else {
        return 0; // atingiu
    }
}

function bissexto(ano) {
    if (ano % 400 === 0) {
        return true;
    } else if (ano % 100 === 0) {
        return false;
    } else if (ano % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

function volumePizza(raio, altura) {
    return Math.round(Math.PI * raio * raio * altura);
}

function calculaMRU(posic_inic, veloc, t) {
    const posicaoFinal = posic_inic + veloc * t;
    return posicaoFinal;
}

function inverteString(stringInvertida) {
    return stringInvertida.split('').reverse().join('');
}

function somaValores(objeto) {
    let soma = 0;
    for (let chave in objeto) {
        if (typeof objeto[chave] === 'number') {
            soma += objeto[chave];
        }
    }
    return soma;
}

function encontraNesimoPrimo(n) {
    let count = 0;
    let num = 2;  
    const isPrime = (number) => {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        let i = 5;
        while (i * i <= number) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    };
    while (true) {
        if (isPrime(num)) {
            count++;
            if (count === n) return num; // Retorna o número se é o n-ésimo primo
        }
        num++;
    }
}

function maiorPrefixoComum(p){
    let maior = "";
    for (let i = 0; i < p.length - 1; i++) {
        for (let j = i + 1; j < p.length; j++) {
            let prefixo = "";
            let k = 0;
            while (k < p[i].length && k < p[j].length && p[i][k] === p[j][k]) {
                prefixo += p[i][k];
                k++;
            }
            if (prefixo.length > maior.length) {
                maior = prefixo;
            }
        }
    }

    return maior;
}

function somaSegundoMaiorMenor(numeros) { 
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let segundoMaior = -Infinity;
    let segundoMenor = Infinity;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > segundoMaior && numeros[i] < maior) {
            segundoMaior = numeros[i];
        }
        if (numeros[i] < segundoMenor && numeros[i] > menor) {
            segundoMenor = numeros[i];
        }
    }
    return segundoMaior + segundoMenor;
}

function contaPalindromos(palavras) {
    let count = 0;
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === palavras[i].split('').reverse().join('')) {
            count++;
        }
    }
    return count;
}

function somaStrings(strings) {
    let soma = 0;
    for (let i = 0; i < strings.length; i++) {
        soma += parseInt(strings[i]);
    }
    return soma;
}

async function somaRequisicoes(endpoints) {
    let somaTotal = 0;
  
    for (let endpoint of endpoints) {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Erro ao acessar o endpoint ${endpoint}`);
        }
        const numero = await response.json();
        somaTotal += numero;
      } catch (error) {
        console.error(error.message);
      }
    }
  
    return somaTotal;
}

const cacaAoTesouro = async function (url, tesouro){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${tesouro}`
        }
    }
    requisicao = await axios
    .get(url, config2)
    .then((response) => {
        return response.data;
    })
    while (typeof requisicao !== 'number'){
        requisicao = await axios
        .get(requisicao, config2)
        .then((response) => {
            return response.data;
        })
    }
    return requisicao;
}

main();


// maior prefixo deu errado e soma requisicoes tb + n fiz o ultimo
