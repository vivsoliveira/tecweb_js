
const axios = require("axios");
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};
axios.post('https://tecweb-js.insper-comp.com.br/token', {
    username: "victoriaof"
}, config)
.then((response) => {
    console.log('Token recebido:', response.data);
})
.catch((error) => {
    console.error('Erro na requisição:', error);
});
