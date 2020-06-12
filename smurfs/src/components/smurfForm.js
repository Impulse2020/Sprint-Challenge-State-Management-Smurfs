import React, {useState} from 'react';
import {connect} from 'react-redux';
import {POSTsmurf} from '../actions/actions';




const SmurfForm = (props) =>{

    const [smurf, setSmurf] = useState({
        name: '',
        height: '',
        nickName: '',
    });

    const inputHandler = (event) =>{
        event.preventDefault();
        setSmurf({...smurf, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.POSTsmurf({...smurf, [event.target.name]: event.target.value});
    }


return(
    <div className="smurfForm" >
        Name: <input name="Name" type="text" onChange={inputHandler} className="input" />
        height: <input name="Name" type="text" onChange={inputHandler} className="input" />
        nickName: <input name="Name" type="text" onChange={inputHandler} className="input" />
        <button onSubmit={handleSubmit}>Add Smurf</button>


    </div>
)




}

export default SmurfForm;