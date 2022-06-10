import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine um datepicker {props.color} aqui.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
