ReactDOM.render(
    <h1>Hello, world!</h1>,//Elemento JSX
    document.getElementById('root')//Elemento HTML selecionado no DOM
  );

<div id="root"></div>// elemento selecionado na página html para renderizar o elemento jsx



function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

