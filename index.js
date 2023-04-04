const axios = require ('axios');

let cep = 83065400;

function pegaCep(cep) {
  try {
    console.log('olaaa')
/*     axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {
      console.log(response);
    }) */
  } catch (error) {
    console.log(error);
  };
}
pegaCep(cep)