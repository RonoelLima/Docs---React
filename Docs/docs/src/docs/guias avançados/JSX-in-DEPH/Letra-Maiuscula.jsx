import React from 'react';

// Errado! Isso é um componente e devia começar com letra maiúscula:
function hello(props) {
  // Correto! Esse uso da <div> é legítimo porque div é uma tag HTML válida:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Errado! O React pensa que <hello /> é uma tag HTML porque não começa com letra maiúscula:
  return <hello toWhat="World" />;
}

import React from 'react';

// Correto! Isso é um componente e deve começar com letra maiúscula:
function Hello(props) {
  // Correto! Esse uso da <div> é legítimo porque div é uma tag HTML válida:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Correto! O React sabe que <Hello /> é um componente porque ele começa com letra maiúscula.
  return <Hello toWhat="World" />;
}
