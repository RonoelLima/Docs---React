//String Literals
<MyComponent>Hello world!</MyComponent>

//Elemento Filhos JSX
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>


//Um componente React pode retornar um array de elementos:
render() {
    // Não há necessidade de envolver uma lista de itens em um elemento extra!
    return [
      // Não esqueça das keys :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }

//Expressões JavaScript como Elementos Filhos
<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>


function Hello(props) {
    return <div>Hello {props.addressee}!</div>;
  }

  function Item(props) {
    return <li>{props.message}</li>;
  }
  
  function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
    );
  }


// Chama o callback do elemento filho numTimes para produzir um componente repetido
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>Esse é o item {index} na lista </div>}
      </Repeat>
    );
  }