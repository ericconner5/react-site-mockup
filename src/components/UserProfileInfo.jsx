import React from 'react';

function UserProfileInfo(){
  const userProfileInfoStyles = {
    backgroundImage: "url(https://parsonsinteriordesign2014.files.wordpress.com/2014/03/613612_pd.jpg)",
    minWidth: '23%',
    maxWidth: '23%',
    maxHeight: '23%',
    minHeight: '23%',
  };

  return(
    <div style={userProfileInfoStyles}>
      <img src="https://i.pinimg.com/236x/8d/09/00/8d0900e38871813eb07783315b06b604--side-by-side-killing.jpg"></img>
      <h3 style={{color: 'white'}}>Jeremy Chillersman</h3>
    </div>
  );
}

export default UserProfileInfo;
