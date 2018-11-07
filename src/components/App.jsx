import React from 'react';
import Header from './Header';
import Newsfeed from './Newsfeed';
import UserProfileInfo from './UserProfileInfo';

function App(){
  return (
    <div>
      <Header/>
      <UserProfileInfo/>
      <Newsfeed/>
    </div>
  );
}
export default App;
