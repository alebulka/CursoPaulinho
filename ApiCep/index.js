const axios = require ('axios');

let cep = 83065400;

async function pegaCep(cep) {
  try {
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;
    console.log(document);
    const rua = document.getElementById('rua').setAttribute('value', data.rua);
    const bairro = document.getElementById('bairro').setAttribute('value', data.bairro);
    const cidade = document.getElementById('cidade').setAttribute('value', data.cidade);
    const estado = document.getElementById('estado').setAttribute('value', data.estado);
   /*  rua.value = data.rua */

  } catch (error) {
    console.log(error);
  };
}
pegaCep(cep);