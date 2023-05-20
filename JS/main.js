var cliente = new fila();
var fornecedor = new pilha();

function enqueue_fila(){
    var nome1 = document.getElementById("nome").value;
    var sobrenome1 = document.getElementById("sobrenome").value;
    var cpf1 = document.getElementById("cpf").value;
    var email1 = document.getElementById("email").value;
    var telefone1 = document.getElementById("telefone").value;
  cliente.enqueue(nome1, sobrenome1, email1, cpf1, telefone1);
} 

function dequeue_fila(){
  return cliente.dequeue();
}

function print_fila(){
  return cliente.imprimeFila();
}

function push_pilha(){
  fornecedor.push(cnpj2, razao_social2, nome_fantasia2, email2, telefone2);
}

function pop_pilha(){
  return fornecedor.pop();
}

function print_pilha(){
  return fornecedor.imprimePilha();
}
