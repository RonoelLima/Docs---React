<button onClick={activateLasers}>  
    Ativar lasers
</button>

function Form() {

    function handleSubmit(e) {
      e.preventDefault();    
      console.log('Você clicou em enviar.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </form>
    );
  }

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
  
      // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback    this.handleClick = this.handleClick.bind(this);  }
  
    handleClick() { this.setState(prevState => ({  isToggleOn: !prevState.isToggleOn }));  }
    render() {
      return (
        <button onClick={this.handleClick}> 
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );



  // Utilize arrow functions para não precisar fazer o bind das funções em componentes de class em react
  class LoggingButton extends React.Component {
    // Essa sintaxe garante que o `this` seja vinculado ao handleClick.  // Atenção: essa é uma sintaxe *experimental*.  handleClick = () => {    console.log('this is:', this);  }
    render() {
      return (
        <button onClick={this.handleClick}>
          Clique Aqui
        </button>
      );
    }
  }