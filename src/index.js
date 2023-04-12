const XMLHttpRequest = require('xhr2').XMLHttpRequest;

let cep = '83065-400';

function validaCep() {
  const cepReplace = cep.replace('-', '');
  if (cepReplace.length == 8) {
    console.log(cepReplace);
  }
  else{ console.log(`CEP "${cep}" format invalid`)};
}
validaCep();

const req = new XMLHttpRequest();
req.open("GET", `http://viacep.com.br/ws/${cep}/json/`);

req.addEventListener("readystatechange", function() {
  if(req.readyState === 4 && req.status == 200) {
    req.onload = () =>{
      const respostaApi = JSON.parse(req.response);
      const rua = document.getElementById('rua').setAttribute('value', data.rua);
      const bairro = document.getElementById('bairro').setAttribute('value', data.bairro);
      const cidade = document.getElementById('cidade').setAttribute('value', data.cidade);
      const estado = document.getElementById('estado').setAttribute('value', data.estado);
    };
  }
});

req.send();


/* async function pegaCep(cep) {
  try {
    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
    const data = response.data; */
    /*     console.log(document); */

/*   } catch (error) {
        console.log(error);
  }; */
/* }

pegaCep(cep); */