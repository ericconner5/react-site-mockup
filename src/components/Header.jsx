import React from "react";

function Header(props){
  const headerStyles = {
    backgroundColor: '#1fd0Ff',
    fontFamily: 'comic sans MS',
    position: 'absolute',
    top: '0',
    width: '100%'
  }
  return (
    <div style={headerStyles}>
      <h1>Help Queue</h1>
    </div>
  );
}

export default Header;
