function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>A água ferveria.</p>;  }
    return <p>A água não ferveria.</p>;}

    function BoilingVerdict(props) {
        if (props.celsius >= 100) {
          return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
      }
      
      class Calculator extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {temperature: ''};
        }
      
        handleChange(e) {
          this.setState({temperature: e.target.value});
        }
      
        render() {
          const temperature = this.state.temperature;
          return (
            <fieldset>
              <legend>Enter temperature in Celsius:</legend>
              <input
                value={temperature}
                onChange={this.handleChange} />
              <BoilingVerdict
                celsius={parseFloat(temperature)} />
            </fieldset>
          );
        }
      }
      
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Calculator />);

      // Criando um opção para Fahrenheit

      const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };
      
      class TemperatureInput extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {temperature: ''};
        }
      
        handleChange(e) {
          this.setState({temperature: e.target.value});
        }
      
        render() {
          const temperature = this.state.temperature;
          const scale = this.props.scale;
          return (
            <fieldset>
              <legend>Enter temperature in {scaleNames[scale]}:</legend>
              <input value={temperature}
                     onChange={this.handleChange} />
            </fieldset>
          );
        }
      }
      
      class Calculator extends React.Component {
        render() {
          return (
            <div>
              <TemperatureInput scale="c" />
              <TemperatureInput scale="f" />
            </div>
          );
        }
      }
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Calculator />);

// função de conversão do Calculator
      function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
      function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }

function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
