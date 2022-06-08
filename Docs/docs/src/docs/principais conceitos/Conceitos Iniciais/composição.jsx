function Welcome(props) {
    return <h1>Olá, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Sara" />      
        <Welcome name="Cahal" />      
        <Welcome name="Edite" />    
    </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );