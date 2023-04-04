const axios = require ('axios');

let cep = 83065400;

const rua = document.getElementById('rua');
/* const bairro = document.getElementById('bairro').value=(conteudo.bairro);
const cidade = document.getElementById('cidade').value=(conteudo.localidade);
const estado = document.getElementById('estado').value=(conteudo.uf); */

async function pegaCep(cep) {
  try {
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    const data = response.data
    const rua = document.getElementById('rua');
      console.log(data);
  } catch (error) {
    console.log(error);
  };
}
pegaCep(cep)