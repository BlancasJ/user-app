import React, {useContext} from 'react';
import Form from './Form';
import {SignupContext} from '../context/SignupContext';
import {users} from '../db/loginUsers';

const Signup = ( { state, setState } ) => {

  const { name, setName, username, setUsername, password, setPassword } = useContext(SignupContext);

  const handleButton = async () => {
    const bool = users.find( user => user.name === name && user.username === username && user.password === password );
    if(bool instanceof Object) return console.log('Some error');
    setState({ ...state, username: username, password: password, isLoggedIn: true });
    const obj = {
      id: users.length,
      name: name,
      username: username,
      password: password,
      isLoggedIn: true
    }
    users.push(obj);
  };

  const handleLogIn = () => {
    setState( { ...state, signup: false } );
  };

  const INPUTS = [{labelInput:'Name', typeInput:'text', val: name, setVal: setName}, {labelInput:'Username', typeInput:'text', val: username, setVal: setUsername}, 
    {labelInput:'Password', typeInput:'password', val: password, setVal: setPassword}];
  const MESSAGES = [{text: 'Already have an account? Log in', handle: handleLogIn}];

  return (
    <Form 
      inputs={INPUTS}
      textBox='I want to receive inspiration, marketing promotions and updates via email.'
      textButton='Sign up'
      title='Sign up'
      messages={MESSAGES}
      handleButton={handleButton}
    />
  )
}

export default Signup
