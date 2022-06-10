//xpressões JavaScript como Props
function NumberDescriber(props) {
    let description;
    if (props.number % 2 == 0) {
      description = <strong>even</strong>;
    } else {
      description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number</div>;
  }

  <MyComponent foo={1 + 2 + 3 + 4} />


//String Literals
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />



<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />


//Props com Valor Padrão “True”
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />

//Atributos com Spread
function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
  }
  
  function App2() {
    const props = {firstName: 'Ben', lastName: 'Hector'};
    return <Greeting {...props} />;
  }

  const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
  };
  
  const App = () => {
    return (
      <div>
        <Button kind="primary" onClick={() => console.log("clicked!")}>
          Hello World!
        </Button>
      </div>
    );
  };