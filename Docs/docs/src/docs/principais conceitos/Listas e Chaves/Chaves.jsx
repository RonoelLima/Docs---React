const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>    {number}
  </li>
);

const todoItems = todos.map((todo) =>
  <li key={todo.id}>    {todo.text}
  </li>
)

const todoItems = todos.map((todo, index) =>

  // Apenas faça isso caso os itens não possuam IDs estáveis  <li key={index}>    {todo.text}
  </li>
);

//USO CORRETO DAS CHAVES PARA RENDERIZAR MULTIPLOS COMPONENTES 
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(<NumberList numbers={numbers} />);
  