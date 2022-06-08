
// Exemplo de uma função pura
function sum(a, b) {
    return a + b;
  }

//Exemplo de uma função impura
function withdraw(account, amount) {
    account.total -= amount;
  }

// REGRA ESTRITA DO REACT
//Todos os componentes React tem que agir como funções puras em relação ao seus props.