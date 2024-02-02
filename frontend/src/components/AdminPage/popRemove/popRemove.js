import React from 'react';
import './popRemove.css';

const PopRemove = (props) => {
  const handleRemove = () => {
    // Call the remove function passed from the parent
    props.handleRemove(props.userName);
    // Close the PopRemove component
    props.setTrigger(false);
  };

  return (
    props.trigger ? (
      <div className="popRemovePage">
        <div className="popRemove">
          <p>Are You Sure You Want To Remove This Moderator ?</p>
          <div className="Ps">
            <p>User name : <span style={{color : '#000', fontWeight : '400'}}>{props.userName}</span></p>
            <p>Email address : <span style={{color : '#000', fontWeight : '400'}}>{props.email}</span></p>
          </div>
          <div className='buts'>
            <button style={{ background: '#AEAEAE' }} onClick={() => props.setTrigger(false)}>Cancel</button>
            <button style={{ background: '#EE4A6A' }} onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default PopRemove;
