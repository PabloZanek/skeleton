import React from 'react';

import Button from '../app/Button';

const UserComponent = () => {
  const login = () => {
    console.log('login');
  };

  return (
    <Button type="primary" className="w-32 h-10 font-bold" onClick={login}>
      Entrar
    </Button>
  );
};

export default UserComponent;
