import React, { useState } from 'react';
import { SERVER_URL } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const [user, setUser] = useState({ username: '', password: '' });
const [isAuthenticated] = useState(false);

const Login = () => {
  return (
    <div>
      <TextField name='username' label='Username' onChange={handleChange} /><br />
      <TextField name='password' label='Password' onChange={handleChange} /><br /><br />
      <Button variant="outlined" color='primary' onClick={login}>
        Login
      </Button>
    </div>
  );
};

export default Login;
