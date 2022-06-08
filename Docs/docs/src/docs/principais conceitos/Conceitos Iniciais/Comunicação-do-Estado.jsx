function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }

<FormattedDate date={this.state.date} />

function App() {
    return (
      <div>
        <Clock />      
        <Clock />      
        <Clock />    
    </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );