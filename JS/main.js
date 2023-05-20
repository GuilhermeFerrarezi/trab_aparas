var cliente = new fila();
var fornecedor = new pilha();

function enqueue_fila(nome, sobrenome, email, cpf, telefone){
  cliente.enqueue(nome, sobrenome, email, cpf, telefone);
} 

function dequeue_fila(){
  return cliente.dequeue();
}

function print_fila(){
  return cliente.imprimeFila();
}

function push_pilha(cnpj, razao_social, nome_fantasia, email, telefone){
  fornecedor.push(cnpj, razao_social, nome_fantasia, email, telefone);
}

function pop_pilha(){
  return fornecedor.pop();
}

function print_pilha(){
  return fornecedor.imprimePilha();
}
