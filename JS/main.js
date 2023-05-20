var cliente = new fila();
var fornecedor = new pilha();

var form1 = document.getElementById('formulario_cliente');
var form2 = document.getElementById('formulario_forn');

function enqueue_fila(){
  let nome1 = document.getElementById('nome').value;
  let sobrenome1 = document.getElementById('sobrenome').value;
  let cpf1 = document.getElementById('cpf').value;
  let email1 = document.getElementById('email').value;
  let telefone1 = getElementById('telefone').value;
  cliente.enqueue(nome1, sobrenome1, email1, cpf1, telefone1);
  console.log()
} 

function dequeue_fila(){
  return cliente.dequeue();
}

function print_fila(){
  return cliente.imprimeFila();
}

function push_pilha(){
  let nome_fantasia2 = document.getElementById('nomeFantasia').value;
  let razao_social2 = document.getElementById('razaoSocial').value;
  let cnpj2 = document.getElementById('cnpj').value;
  let email2 = document.getElementById('emailforn').value;
  let telefone2 = document.getElementById('telefoneforn').value;
  fornecedor.push(cnpj2, razao_social2, nome_fantasia2, email2, telefone2);
}

function pop_pilha(){
  return fornecedor.pop();
}

function print_pilha(){
  return fornecedor.imprimePilha();
}
