import React, {useState} from 'react';
import {connect} from 'react-redux';





const SmurfForm = (props) =>{

    const [smurf, setSmurf] = useState({
        name: '',
        height: '',
        age: '',
    });

    const inputHandler = (event) =>{
        event.preventDefault();
        setSmurf({...smurf, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.POSTsmurfs({...smurf, [event.target.name]: event.target.value}, console.log(event.target.name));
    }


return(
    <form className="smurfForm" >
        Name: <input name="name" type="text" onChange={inputHandler} className="input" />
        height: <input name="height" type="text" onChange={inputHandler} className="input" />
        age: <input name="age" type="text" onChange={inputHandler} className="input" />
        <button onSubmit={handleSubmit}>Add Smurf</button>
        {console.log(props)}

    </form>
)




}

export default SmurfForm;