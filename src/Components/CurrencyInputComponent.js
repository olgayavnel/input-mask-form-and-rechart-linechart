import React from 'react';
import CurrencyInput from 'react-currency-input-field';

const CurrencyInputComponent = () => {
  return (
    <CurrencyInput
      id='input-example'
      name='input-name'
      //   defaultValue={1000}
      decimalsLimit={2}
      onValueChange={(value, name) => console.log(value, name)}
    />
  );
};

export default CurrencyInputComponent;
