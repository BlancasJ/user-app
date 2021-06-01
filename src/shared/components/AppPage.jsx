import React, {useState, useContext} from 'react';
import Login from './Login';
import Signup from './Signup';
import {LoginProvider} from '../context/LoginContext';
import {SignupProvider} from '../context/SignupContext';
import {UserProvider} from '../context/UserContext'
import HomePage from './HomePage';
import ButtonAppBar from './ButtonAppBar';
import { makeStyles } from '@material-ui/core/styles';
import {ThemeContext} from '../context/ThemeContext';
import ThemeDN from './ThemeDN';

const AppPage = () => {
  const {theme} = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    home: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    container: {
      minHeight: '100vh',
      backgroundColor: theme.backgroundColor,
    },
    title: {
      fontSize: '26px',
      textAlign: 'center',
      color: theme.color,
    },
    logSign: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
  }));
  const classes = useStyles();
  
  const [state, setState] = useState({username: '', password: '', isLoggedIn: false, signup: false });

  const onclick = () => {
    setState({...state, signup: false, isLoggedIn: false})
  };

  return (
    <React.Fragment>
      
      {state.isLoggedIn ?
        <div className={classes.container}>
          <ButtonAppBar title='Users' onclick={onclick} />
          <h1 className={classes.title}>Users Cards</h1>
          
          <div className={classes.home}>
            <UserProvider>
              <HomePage /> 
            </UserProvider>
          </div>
          <ThemeDN />
        </div>: 
        state.signup ?
        <div className={`${classes.logSign} ${classes.container}`}>
        <SignupProvider >
          <Signup 
            state={state}
            setState={setState}
          />
        </SignupProvider>
        <ThemeDN />
        </div>:
        <div className={`${classes.logSign} ${classes.container} `}>
        <LoginProvider>
          <Login 
            state={state}
            setState={setState}
          />
        </LoginProvider>
        <ThemeDN />
        </div>}
    </React.Fragment>
  );
}

export default AppPage;
