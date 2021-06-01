import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import {users} from '../db/loginUsers';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserCard({user, onClick}) {
  const classes = useStyles();
  const bool = users.find((userLog) => userLog.id === user.id && userLog.isLoggedIn) instanceof Object;
  console.log(bool);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {user.name.charAt(0)}
          </Avatar>
        }
        
        title={user.name}
        
      />
      <CardMedia
        className={classes.media}
        image={user.avatar}
        title="Profile Picture"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.biography}
        </Typography>
      </CardContent>
      {bool ? <CardActions disableSpacing>
        <IconButton
          onClick={() => onClick(user.id)}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>: null}
    </Card>
  );
}
