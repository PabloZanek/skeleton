import React, { useState } from 'react';
import Button from '../app/Button';
import Input from '../app/Input';

const Login = () => {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');

  return (
    <div>
      <Input className="w-80" label="Usuario: " onChange={updateUsername} value={username} placeholder="Nombre de usuario"/>
      {username}
      <Input className="w-80 mt-5" label="Contraseña: " onChange={updatePassword} value={password} placeholder="Contraseña" type="password" />
      <Button type="primary" className="mt-12 w-80 text-white" size="2xl">Entrar</Button>
    </div>
  );
};

export default Login;
