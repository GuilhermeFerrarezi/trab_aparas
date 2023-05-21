var cliente = new fila();
var fornecedor = new pilha();

function enqueue_fila(){
    var nome_cliente = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var cpf = document.getElementById("cpf").value;
    var email_cliente = document.getElementById("email").value;
    var telefone_cliente = document.getElementById("telefone").value;
    cliente.enqueue(nome_cliente, sobrenome, email_cliente, cpf, telefone_cliente);
} 

function dequeue_fila(){
  return cliente.dequeue();
}

function print_fila(){
  return cliente.imprimeFila();
}

function push_pilha(){
    var nome_forn = document.getElementById("nomeFantasia").value;
    var razao = document.getElementById("razaoSocial").value;
    var cnpj = document.getElementById("cnpj").value;
    var email_forn = document.getElementById("emailforn").value;
    var telefone_forn = document.getElementById("telefoneforn").value;
    fornecedor.push(cnpj, razao, nome_forn, email_forn, telefone_forn);
    
}

function pop_pilha(){
  return fornecedor.pop();
}

function print_pilha(){
  return fornecedor.imprimePilha();
}
