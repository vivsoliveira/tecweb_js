const axios = require("axios");

// Função para obter um novo token
async function fetchToken() {
    const response = await axios.post('https://tecweb-js.insper-comp.com.br/token', {
        username: "victoriaof"
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    console.log("Token obtido:", response.data.accessToken);
    return response.data.accessToken;
}

// Função para buscar exercícios usando o token atualizado
async function fetchExercises(token) {
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
    const token = await fetchToken();  // Obter token
    const exercises = await fetchExercises(token);  // Obter exercícios

    console.log("Dados dos exercícios:", exercises);

    // Supondo que a estrutura dos dados de exercício seja conhecida e consistente
    let a = exercises.soma.entrada.a;
    let b = exercises.soma.entrada.b;
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
        resposta: resultadoSoma
    }, config)
    .then(response => console.log("Resposta do servidor:", response.data))
}

function soma(a, b) {
    return a + b;
}

main();
