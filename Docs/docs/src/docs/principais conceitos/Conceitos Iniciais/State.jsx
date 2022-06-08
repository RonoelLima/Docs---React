// Errado - Não é possível atualizar o state diretamente 
this.state.comment = 'Hello';

// Correto - O state é atualizado através da função setState
this.setState({comment: 'Hello'});

//O único lugar onde você pode atribuir this.state é o construtor.

// Errado
this.setState({
    counter: this.state.counter + this.props.increment,
  });

// Correto
this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));

// Correto
this.setState(function(state, props) {
    return {
      counter: state.counter + props.increment
    };
  });

// Para componentes de Class podemos atualizar o state com mais de um objeto atualizando somente a variável que desejamos acessar
constructor(props) {
    super(props);
    this.state = {
      posts: [],      
      comments: []    };
  }

  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments      });
    });
  }