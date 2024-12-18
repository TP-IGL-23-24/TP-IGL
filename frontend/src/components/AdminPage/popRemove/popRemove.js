import React from 'react';
import axios from 'axios';
import './popRemove.css';

/**
 * Component for removing a moderator.
 * @param {Object} props - Component properties.
 * @param {boolean} props.trigger - Boolean indicating whether the pop-up is triggered.
 * @param {Function} props.setTrigger - Function to set the pop-up trigger.
 * @param {string} props.username - Username of the moderator to be removed.
 * @param {string} props.email - Email address of the moderator to be removed.
 * @param {Function} props.handleRemove - Function to handle the removal of a moderator.
 * @returns {JSX.Element} JSX element representing the pop-up for removing a moderator.
 */
const PopRemove = (props) => {

  /**
   * Handles the removal of the moderator.
   * @async
   */
  const handleRemove = async () => {
    try {
      // Make a POST request to your Django backend's delete moderator endpoint
      await axios.post('http://127.0.0.1:8000/auth/delete_moderator/', { username: props.username });

      // Call the remove function passed from the parent
      props.handleRemove(props.username);

      // Close the PopRemove component
      props.setTrigger(false);
    } catch (error) {
      console.error('Error removing moderator:', error.response.data);
      // Handle the error as needed
    }
  };

  return (
    props.trigger ? (
      <div className="popRemovePage">
        <div className="popRemove">
          <p>Are You Sure You Want To Remove This Moderator ?</p>
          <div className="Ps">
            <p>User name : <span style={{ color: '#000', fontWeight: '400' }}>{props.username}</span></p>
            <p>Email address : <span style={{ color: '#000', fontWeight: '400' }}>{props.email}</span></p>
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
