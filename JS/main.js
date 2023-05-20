var fila = new fila();
var pilha = new pilha();

function enqueue_fila(nome, sobrenome, email, cpf, telefone){
  fila.enqueue(nome, sobrenome, email, cpf, telefone);
} 

function dequeue_fila(){
  return fila.dequeue();
}

function print_fila(){
  return fila.imprimeFila();
}

function push_pilha(cnpj, razao_social, nome_fantasia, email, telefone){
  pilha.push(cnpj, razao_social, nome_fantasia, email, telefone);
}

function pop_pilha(){
  return pilha.pop();
}

function print_pilha(){
  return pilha.imprimePilha();
}
