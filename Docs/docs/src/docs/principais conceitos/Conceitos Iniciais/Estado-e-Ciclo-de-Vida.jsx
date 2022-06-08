function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render( element,document.getElementById('root')  
);}
  
setInterval(tick, 1000);

//componetizando a função clock
function Clock(props) {
    return (
      <div>      
          <h1>Hello, world!</h1>      
          <h2>It is {props.date.toLocaleTimeString()}.</h2>    
      </div>  
    );
  }
  
function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,    
      document.getElementById('root')
    );
  }
  
setInterval(tick, 1000);

//Transformando a função clock em um componente de class 
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};  }

    // metodo executado no momento que o componente é montado
    componentDidMount() { 
        this.timerID = setInterval(() => this.tick(), 1000);
     }
    

    // metodo executado quando o componente é desmontado
    componentWillUnmount() { 
        clearInterval(this.timerID);
     }

     tick() {  this.setState({ date: new Date()});  }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />,  document.getElementById('root')
  );