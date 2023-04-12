function validaCep(){
  
  let cep = document.getElementById('cep').value;

  const cepReplace = cep.replace('-', '');
  let cepOK 
  if (cepReplace.length == 8) {
    cepOK = cepReplace;
  }
  else{ 
    window.alert(`CEP "${cep}" format invalid`)
  };
  
  const req = new XMLHttpRequest();
  req.open("GET", `http://viacep.com.br/ws/${cepOK}/json/`);
  req.send();
  
  req.addEventListener("readystatechange", function() {
    if(req.readyState === 4 && req.status == 200) {
      req.onload = () =>{
        const respostaApi = JSON.parse(req.response);
        if (respostaApi.erro == true) {
          let rua = document.getElementById('rua').value = respostaApi.erro;
          console.log('oooooi');
/*           const bairro = document.getElementById('bairro').value = respostaApi.bairro;
          const cidade = document.getElementById('cidade').value = respostaApi.localidade;
          const estado = document.getElementById('estado').value = respostaApi.estado; */
        }
        let rua = document.getElementById('rua').value = respostaApi.logradouro;
        let bairro = document.getElementById('bairro').value = respostaApi.bairro;
        let cidade = document.getElementById('cidade').value = respostaApi.localidade;
        let estado = document.getElementById('estado').value = respostaApi.estado;
      };
    } 
  });
}
validaCep();