class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      try {
        // Faz alguma coisa que pode quebrar
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      if (this.state.error) {
        return <h1>Capturei um erro.</h1>
      }
      return <button onClick={this.handleClick}>Clique em mim</button>
    }
  }