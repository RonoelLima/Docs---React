// Elemtnos que não serão renderizados
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>

//Condicional

<div>
  {showHeader && <Header />}
  <Content />
</div>

// Expressõe boleanas
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>