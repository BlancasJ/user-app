import React, {useState, useContext} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import {ThemeContext} from '../context/ThemeContext'

const CheckBox = ({text}) => {
  const {theme} = useContext(ThemeContext);
  const useStyles = makeStyles(() => ({
    checked: {
      margin: '10px',
      alignSelf: 'flex-start',
    },
    check: {
      color: theme.color
    }
  }));
  const classes = useStyles();
  const [state, setState] = useState(false)
  const handleChange = () => setState(!state)
  return (
    <FormControlLabel className={classes.checked}
      control={
        <Checkbox
          checked={state}
          onChange={handleChange}
          name="checked"
          color="primary"
          className={classes.check}
        />
      }
      label={text}
    />
  )
}

export default CheckBox;
