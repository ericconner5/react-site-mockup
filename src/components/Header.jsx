import React from 'react';

function Header(){
  const headerStyles = {
    borderBottom: '2px solid #cccccc',
    fontFamily: 'comic sans MS',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    border: '1px solid green',
    color: 'black',
  };

  const headerSectionStyles = {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid green',

  };
  return (
    <div style={headerStyles}>
      <div style={headerSectionStyles}>
        <h1>Home</h1>
        <h1>Notifications</h1>
        <h1>Messages</h1>
      </div>
      <div style={headerSectionStyles}>
        <h1>Search</h1>
        <h1>Tweet</h1>
      </div>
    </div>
  );
}

export default Header;
