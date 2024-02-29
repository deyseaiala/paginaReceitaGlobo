//function darBoasVindas(){
  //  alert("Seja bem vindo(a)! Aqui você irá aprender muitas receitas.");
//}
//darBoasVindas();

function cadastrar(){
document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault();
    
    alert("Cadastro realizado com sucesso!")

    let userName = document.querySelector("#nomeUsuario").value;
    let paragrafoPessoal = document.getElementById("primeiroParagrafo");
    paragrafoPessoal.innerText = "Olá "+ userName + ", esse bolo de chocolate é um dos nossos favoritos e vai ser o seu também. Esta receita é fácil, simples e combina com um cafezinho no lanche da tarde. Para preparar a massa do bolo, você vai precisar de chocolate em pó, farinha de trigo, açúcar, ovos, fermento em pó e óleo.";
})
}

cadastrar();





// function personalizarPagina(){
// let paragrafoPessoal = document.getElementById("primeiroParagrafo");

  //paragrafoPessoal.innerHTML = "<p>Olá "+ userName + ", esse bolo de chocolate é um dos nossos favoritos e vai ser o seu também. Esta receita é fácil, simples e combina com um cafezinho no lanche da tarde. Para preparar a massa do bolo, você vai precisar de chocolate em pó, farinha de trigo, açúcar, ovos, fermento em pó e óleo.</p>";
     
//}
