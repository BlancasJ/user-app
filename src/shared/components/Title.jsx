import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(() => ({
  container: {
    margin: '100px 0 10px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '26px',
  },
  icon: {
    fontSize: '24px',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '10px',
    color: 'whitesmoke',
  }
}));

const Title = ({title}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LockIcon className={classes.icon}/>
      <h1 className={classes.title} >{title}</h1>
    </div>
  )
}

export default Title
