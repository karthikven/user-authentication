import React from 'react';
import { Link } from 'react-router-dom'
import './CompletedButton.css'

const CompletedButton = (props) => {
  return (
    <Link to="/">
      <button className="completed-button">
        Completed Tasks:&nbsp; <span className="completed-count">{props.completedTasks.length}</span>    
      </button>
    </Link>
  );
};

export default CompletedButton;