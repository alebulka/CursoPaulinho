const axios = require ('axios');

let cep = '83065-400';

function validaCep() {
  const cepReplace = cep.replace('-', '');
  if (cepReplace.length == 8) {
      console.log(cepReplace);
  }
  else{ console.log(`CEP "${cep}" format invalid`)}
}
validaCep();

async function pegaCep(cep) {
  try {
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;
/*     console.log(document); */
    const rua = document.getElementById('rua').setAttribute('value', data.rua);
    const bairro = document.getElementById('bairro').setAttribute('value', data.bairro);
    const cidade = document.getElementById('cidade').setAttribute('value', data.cidade);
    const estado = document.getElementById('estado').setAttribute('value', data.estado);
  } catch (error) {
/*     console.log(error); */
  };
}
pegaCep(cep);