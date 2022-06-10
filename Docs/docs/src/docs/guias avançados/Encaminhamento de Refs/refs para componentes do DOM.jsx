function FancyButton(props) {
    return (
      <button className="FancyButton">
        {props.children}
      </button>
    );
  }

  const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));
  
  // Você agora pode obter a ref diretamente para o button do DOM:
  const ref = React.createRef();
  <FancyButton ref={ref}>Click me!</FancyButton>;

  function logProps(Component) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
  
      render() {
        const {forwardedRef, ...rest} = this.props;
  
        // Atribui a prop "fowardRef" como uma ref
        return <Component ref={forwardedRef} {...rest} />;
      }
    }
  
    // Note o segundo parâmetro "ref" fornecido pelo React.fowardRef.
    // Nós podemos passá-lo para LogProps como qualquer outra props regular, e.g. "fowardedRef"
    // E ela pode ser anexada ao componente
    return React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />;
    });
  }