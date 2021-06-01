import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBox from './CheckBox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Title from './Title';
import {ThemeContext} from '../context/ThemeContext'

const Loggin = ( { inputs, textBox, textButton, title, messages, handleButton } ) => {
  const {theme} = useContext(ThemeContext);
  const useStyles = makeStyles(() => ({
    root:{
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.color
      },
    },
    login: {
      flex: '0 0 100%',
      minWidth: '350px', 
      color: theme.color
    },
    input: {
      margin: '10px',
      width: '95%',
      borderColor: theme.color
    },
    form: {
      width: '100%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'nowrap',
      position: 'relative',
      color: theme.color
    },
    button: {
      display: 'inline-block',
      margin: 'auto',
      width: '90%',
    },
    textButton: {
      margin: '10px 0 0 0',
      padding: '10px',
      fontSize: '11px',
      color: theme.color
    },
    inputColor: {
      color: theme.color
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <Title title={title} />
      <form className={classes.form} noValidate autoComplete="off">
        {inputs.map( (input, index) => {
          const {labelInput, typeInput, val, setVal} = input;
          return (<TextField
            InputLabelProps={{
              className: classes.inputColor
            }}
            className={`${classes.input} ${classes.root}`}
            required
            key={index}
            id={labelInput}
            label={labelInput} 
            type={typeInput} 
            variant="outlined"
            value={val}
            onChange={e => setVal(e.target.value)}
          />)
        })}

        <CheckBox text={textBox} />

        <Button variant="contained" color="primary" className={classes.button} onClick={() => handleButton()}>
          {textButton}
        </Button>
        
      </form>
      {messages.map( (message, index) => {
        return (<Button key={index} color="primary" className={classes.textButton} onClick={message.handle} >{message.text}</Button>)
      })}
    </div>
  )
}

export default Loggin