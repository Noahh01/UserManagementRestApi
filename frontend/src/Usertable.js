import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import editIcon from './icons/editUser.png';
import delIcon from './icons/deleteUser.png';
import { api } from './apiConfig';


function Usertable() {
    const [users, setUsers] = useState([]);
    const emptyObj = {firstName:'', lastName:'',email:'',address:''};

    useEffect(() => { getUsers() }, []);

    const getUsers = () => {
        api.get('/').then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleDelete = (userId) => {
        api.delete(`/${userId}`).then(res => {
            console.log(res);
            getUsers();
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div>
            <h1>User Managament System</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>E-mail</th>
                        <th>Address</th>
                        <th>Created On</th>
                        <th>Last Updated</th>
                        <th>Actions</th>
                    </tr>
                    {users.map(elem => {
                        return(
                            <tr key={elem.id}>
                                <td>{elem.firstName}</td>
                                <td>{elem.lastName}</td>
                                <td>{elem.email}</td>
                                <td>{elem.address}</td>
                                <td>{elem.createdAt.split('T')[0]}</td>
                                <td>{elem.updatedAt.split('T')[0]}</td>
                                <td><Link to='/userform/Edit' state={elem}><img src={editIcon}/></Link> <button className='action-button' onClick={() => handleDelete(elem._id)}><img src={delIcon}/></button></td>
                            </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <Link to='/userform/Create' state={emptyObj}><button className='create-button'>+ Add New User</button></Link>
        </div>
    )
}

export default Usertable;