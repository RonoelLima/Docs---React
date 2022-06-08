function ListItem(props) {
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number, i) =>
          <ListItem key={i}
                    value={number} />
        )}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5,10,11,12,13,14];
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(<NumberList numbers={numbers} />);