const element = <h1>Hello, world!</h1>; // Elemento JSX

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
  );


 
function Welcome(props) {  return <h1>Olá, {props.name}</h1>;
}

// exemplo de um elemento definido pelo usuário
const element = <Welcome name="Sara" />;ReactDOM.render(
  element,
  document.getElementById('root')
);