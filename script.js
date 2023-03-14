const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

function cadastrar (){
    /*enviar os dados ao cabeçalho que vai acessar a APi*/
    /*End point = endereço de acesso a APi*/
    fetch("http://localhost:8080/cadastrar", 
        {
            headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
            },
            method: "POST" */(enviar)*/,
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                senha: Isenha.value,
                telefone: Itel.value
            })
        })
        .then(function (res) { console.log(res) }) 
        .catch(function (res) { console.log(res) })

};

/*função p/limpar os campos dps que cadastar atribuindo valor vazio à eles */
function limpar(){
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";
}


/*adicionar os dados digitado pelo usuario no console*/
formulario.addEventListener('submit', function (event){
    event.preventDefault();
    
    cadastrar();
    limpar();
});



