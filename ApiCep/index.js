const axios = require ('axios');

let cep = 83065400;

function pegaCep(cep) {
  try {
/*     console.log('olaaa') */
    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {
      console.log(response);
/*     document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('estado').value=(conteudo.uf); */
    })
  } catch (error) {
    console.log(error);
  };
}
pegaCep(cep)