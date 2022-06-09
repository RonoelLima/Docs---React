class EntradaDeTexto extends React.Component {
    constructor(props) {
      super(props);
      // Cria um ref para guardar o inputDeTexto no DOM 
      this.inputDeTexto = React.createRef();
    }
    render() {
    // Use a `ref` callback para guardar a referencia do texto no input dentro do DOM 
    // elemento em um campo (por exemplo, this.inputDeTexto).
      return (
        <input
          type="text"
          ref={this.inputDeTexto}
        />
      );
    }
  }

  focus() {
    // Focalize explicitamente a entrada de texto usando a API DOM 
    // Nota: estamos acessando o DOM "atual" para obter o elemento
    this.textInput.current.focus();
  }