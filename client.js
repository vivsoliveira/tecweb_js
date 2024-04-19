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

main();
