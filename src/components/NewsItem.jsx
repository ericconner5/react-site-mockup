import React from "react";
import PropTypes from "prop-types";

function NewsItem(props){
  return (
    <div>
      <h3>{props.icon}</h3>
      <hr/> /* is vr a thing? */
      <h4>{props.header} - {props.content}</h4>

    </div>
  );
}

NewsItem.propTypes = {
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsItem;
