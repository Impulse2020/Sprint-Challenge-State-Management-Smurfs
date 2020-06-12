import React, {useState} from 'react';
import {POSTsmurfs} from '../actions/actions';
import {connect} from 'react-redux';


const initialFormValues={
name: "",
height: "",
age: "",
}


const SmurfForm = () =>{

    const [smurf, setSmurf] = useState(initialFormValues);

    const inputHandler = event =>{
        event.preventDefault();
    
        setSmurf({...smurf, [event.target.name]:event.target.value})
        
    }
    
    const handleSubmit = event =>{
       
        POSTsmurfs(smurf);
        
        event.preventDefault();
    }


return(
    <form className="smurfForm" >
        Name: <input name="name" type="text" onChange={inputHandler} className="input" />
        height: <input name="height"  type="text" onChange={inputHandler} className="input" />
        age: <input name="age"  type="text" onChange={inputHandler} className="input" />
             <button onSubmit={handleSubmit}>Add Smurf</button>
        

    </form>
)


}

const mapStateToProps = (state) =>{
    
    return{
        smurfs:state.smurf
        
    }

}

export default connect (mapStateToProps, {POSTsmurfs})(SmurfForm);
