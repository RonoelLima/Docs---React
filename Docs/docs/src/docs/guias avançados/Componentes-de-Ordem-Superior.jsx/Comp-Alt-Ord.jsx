const EnhancedComponent = higherOrderComponent(WrappedComponent);

class CommentList extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        // "DataSource" é uma fonte de dados global
        comments: DataSource.getComments()
      };
    }
  
    componentDidMount() {
      // Subscreve-se às mudanças
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      // Limpa o listener
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      // Atualiza o state do componente sempre que a fonte de dados muda
      this.setState({
        comments: DataSource.getComments()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  }