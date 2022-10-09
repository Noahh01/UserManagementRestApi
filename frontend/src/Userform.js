import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { api } from './apiConfig';


function Userform() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state);
    const { action } = useParams();

    const createUser = () => {
        api.post('/', user)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }


    const editUser = () => {
        api.put(`/${user._id}`, user)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => {
            return {...prev, [name]:value};
        })  
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === 'Create') createUser();
        else editUser();
        navigate('/');
    }

    
    return(
        <div>
            <h1>{action} User Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Firstname</label> <input required name='firstName' type='text' value={user.firstName} onChange={handleChange}/> 
                <label>Lastname</label> <input required name='lastName' type='text' value={user.lastName} onChange={handleChange}/>
                <label>Email</label> <input required name='email' type='text' value={user.email} onChange={handleChange}/> 
                <label>Address</label> <input required name='address' type='text' value={user.address} onChange={handleChange}/>
                <button type='submit' className='submit-button'>Submit</button>
            </form>
        </div>
    )

}

export default Userform;
