//componente funcional simples
function Welcome(props) {
    return <h1>Olá, {props.name}</h1>;
  }


//componente de Class simples
class Welcome extends React.Component {
    render() {
      return <h1>Olá, {this.props.name}</h1>;
    }
  }