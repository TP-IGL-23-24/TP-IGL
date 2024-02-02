import React, { useState } from 'react';
import './popAddModerator.css';

const PopAdd = (props) => {
  const [userName, setUserName] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAddModerator = () => {
    // Call the function passed from the parent to add a new moderator
    props.handleAddModerator({ userName });
    // Close the PopAdd component
    props.setTrigger(false);
  };

  const handleCancel = () => {
    // Reset the userName state to clear the input
    setUserName('');
    // Close the PopAdd component
    props.setTrigger(false);
  };

  return (
    props.trigger ? (
      <>
        <div className="popAddPage">
          <div className="popAdd">
            <p>Fill The Following Fields To Add a New Moderator :</p>
            <div className="inputs">
              <label>
                User Name :
                <input type="text" value={userName} placeholder="User Name" onChange={handleUserNameChange} />
              </label>
            </div>
            <div className='buts'>
              <button style={{ background: '#AEAEAE' }} onClick={handleCancel}>Cancel</button>
              <button style={{ background: '#3AC6EB' }} onClick={handleAddModerator}>Add Moderator</button>
            </div>
          </div>
        </div>
      </>
    ) : null
  );
};

export default PopAdd;
