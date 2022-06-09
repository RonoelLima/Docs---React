import React, { Fragment } from 'react';

function ListaDeItems({ item }) {
  return (
    <Fragment>
      <dt>{item.nome}</dt>
      <dd>{item.descricao}</dd>
    </Fragment>
  );
}

function Glossario(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListaDeItems item={item} key={item.id} />
      ))}
    </dl>
  );
}

function Glossario(props) {
    return (
      <dl>
        {props.items.map(item => (
          // Fragments também aceitam `key`(chave) prop quando estão mapeando coleções
          <Fragment key={item.id}>
            <dt>{item.nome}</dt>
            <dd>{item.descricao}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }

  function ListaDeItems({ item }) {
    return (
      <>
        <dt>{item.nome}</dt>
        <dd>{item.descricao}</dd>
      </>
    );
  }