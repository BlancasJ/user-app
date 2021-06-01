import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import UserCard from './UserCard';

const HomePage = () => {
  const {users, setUsers} = useContext(UserContext);
  
  const onClick = (id) => {
    setUsers(users.filter( user => user.id !== id ));
    console.log(users);
  }

  return (
    <React.Fragment>
      {users.map( user => <UserCard 
        key={user.id}
        user={user}
        onClick={onClick}
      />)}
    </React.Fragment>
  )
};

export default HomePage;
