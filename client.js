const axios = require("axios");
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpY3Rvcmlhb2YiLCJ0ZW50YXRpdmEiOjMsImlhdCI6MTcxMzMxMjAwOCwiZXhwIjoxNzEzMzEyMDY4fQ.u4r0GEj1UMARIcVeHAjnVT5yMuGjApW7t6z9pU6uoz4' 
    }
};
axios.post('https://tecweb-js.insper-comp.com.br/token', {
    username: "victoriaof"
}, config)
.then((response) => {
    console.log('Token recebido:', response.data);
    config.headers.Authorization = `Bearer ${response.data.accessToken}`;  // Atualizando o token no cabeçalho
    return axios.get('https://tecweb-js.insper-comp.com.br/exercicio', config);
})
.then((exercisesResponse) => {
    console.log('Exercícios recebidos:', exercisesResponse.data);
})
.catch((error) => {
    console.error('Erro na requisição:', error);
});
