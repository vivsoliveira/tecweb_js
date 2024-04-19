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
    const g = 9.8; // Aceleração devido à gravidade em m/s^2
    const targetDistance = 100; // Distância do alvo em metros
    const spreadRadius = 2; // Raio de espalhamento da jaca em metros
    const thetaRadians = theta * Math.PI / 180;
    const distance = (v * v * Math.sin(2 * thetaRadians)) / g;
    if (distance < targetDistance - spreadRadius) {
        return -1; // A jaca não chegou ao alvo
    } else if (distance > targetDistance + spreadRadius) {
        return 1; // A jaca passou do alvo
    } else {
        return 0; // A jaca atingiu o alvo
    }
}

main();
