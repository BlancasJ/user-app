import React, {useContext} from 'react';
import Form from './Form';
import {LoginContext} from '../context/LoginContext';
import {users} from '../db/loginUsers';


const Login = ( { state, setState } ) => {
  const { username, setUsername, password, setPassword } = useContext(LoginContext);

  const handleButton = () => {
    const bool = users.find( user => user.username === username && user.password === password );
    if(!(bool instanceof Object)) return console.log('invalid user');
    setState({ ...state, username: username, password: password, isLoggedIn: true });
  };

  const handleSignUp = () => {
    setState( { ...state, signup: true} );
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const INPUTS = [{labelInput:'Username', typeInput:'text', val: username, setVal: setUsername}, {labelInput:'Password', typeInput:'password', val: password, setVal: setPassword}];
  const MESSAGES = [{text: 'Forgot password?', handle: handleForgotPassword}, {text: "Don't have an account? Sign Up", handle: handleSignUp }];

  return (
    <div>
      <Form 
        inputs={INPUTS}
        textBox='Remember me'
        textButton='Log in'
        title='Log-in'
        messages={MESSAGES}
        handleButton={handleButton}
      />
    </div>
  )
}

export default Login;
