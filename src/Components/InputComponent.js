import React, { useState } from 'react';

function InputComponent() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    setState({ [evt.target.name]: evt.target.value });
  };

  return (
    <form>
      <label htmlFor=''>Email</label>
      <input type='text' name='email' onChange={handleChange} />
      <label htmlFor=''>Password</label>
      <input type='password' name='password' onChange={handleChange} />
    </form>
  );
}

export default InputComponent;
