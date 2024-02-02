import React , {useState} from 'react';
import './adminPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUpload } from '@fortawesome/free-solid-svg-icons';
import PopAdd from '../../components/AdminPage/popAddModerator/popAddModerator'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PopRemove from '../../components/AdminPage/popRemove/popRemove';


const AdminPage = () => {

  const [pop,setPop]=useState(false);
  const [popRemove, setPopRemove] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [items, setItems] = useState([
    { id:1, userName: 'youcef', email: 'ly_ouikene@gmail.com' },
    { id:2, userName: 'yasmine', email: 'ly_dinari@gmail.com' },
    { id:3, userName: 'lina', email: 'll_aoulmi@gmail.com' },
    { id:4, userName: 'nina', email: 'lt_brahimi@gmail.com' },
    { id:5, userName: 'youcef', email: 'ly_ouikene@gmail.com' },
    { id:6, userName: 'yasmine', email: 'ly_dinari@gmail.com' },
    { id:7, userName: 'lina', email: 'll_aoulmi@gmail.com' },
    { id:8, userName: 'nina', email: 'lt_brahimi@gmail.com' },
    { id:9, userName: 'youcef', email: 'ly_ouikene@gmail.com' },
    { id:10, userName: 'yasmine', email: 'ly_dinari@gmail.com' },
    { id:11, userName: 'lina', email: 'll_aoulmi@gmail.com' },
    { id:12, userName: 'nina', email: 'lt_brahimi@gmail.com' },
  ]);


  const handleTrashClick = (user) => {
    setSelectedUser(user);
    setPopRemove(true);
  };

  const handleRemove = (userName) => {
    // Remove the user with the given userName from the items array
    const updatedItems = items.filter((item) => item.userName !== userName);
    setItems(updatedItems);
  };

  const handleAddModerator = (newModerator) => {
    // Add the new moderator to the items array
    setItems([...items, { id: items.length + 1, ...newModerator }]);
  };
  

  return (
    <>
        <div className="admin" style={{filter: (pop || popRemove)?'blur(5px)':'blur(0px)'}}>
            <h1>Moderators :</h1>
            <div className="buttons">
                <button onClick={()=>{setPop(true);}}>Add moderator   <FontAwesomeIcon icon={faPlus} /></button>
                <button>Upload article    <FontAwesomeIcon icon={faUpload} /></button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>User name</th>
                    <th>Email address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td className='p-3'>
                        <FontAwesomeIcon onClick={() => handleTrashClick(item)} icon={faTrash} style={{ color: '#3AC6EB', fontSize: '1.4em' }} />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <PopAdd trigger={pop} setTrigger={setPop} handleAddModerator={handleAddModerator}/>
        <PopRemove handleRemove={handleRemove} trigger={popRemove} setTrigger={setPopRemove} userName={(selectedUser)?selectedUser.userName:''} email={(selectedUser)?selectedUser.email:''}  /*on rajoute le passage de l'ID une fois le backend est fait*//>
    </>
  );
};

export default AdminPage;
