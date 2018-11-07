import React from 'react';
import PropTypes from 'prop-types';

function NewsItem(props){
    const iconStyles = {
      minWidth: '7vw',
      maxWidth: '7vw',
      minHeight: '7vw',
      maxHeight: '7vw',
      margin: '1%',
      marginTop: '4.5%',
      marginLeft: '4%',
      paddingRight: '2%',
    };
    const newsItemStyles = {
      display: 'flex',
      flexDirection: 'row',
      color: 'lime',
      minWidth: '33%',
      maxWidth: '33%',
      maxHeight: '33%',
      minHeight: '33%',
      border: '2px solid #ccc'
    };
return (
    <div style={newsItemStyles}>
      <img src={props.icon} alt="Avatars." style={iconStyles}></img>
      <div>
        <h3>{props.header}</h3>
        <p>{props.content}</p>
      </div>
  </div>
  );
}

NewsItem.propTypes = {
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsItem;
