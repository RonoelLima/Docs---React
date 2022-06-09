class MyClass extends React.Component {
    static contextType = MyContext;
    render() {
      let value = this.context;
      /* renderiza algo baseado no valor */
    }
  }

  <MyContext.Consumer>
    {value => /* renderiza algo baseado no valor do context */}
</MyContext.Consumer>

const MyContext = React.createContext(/* algum valor */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools