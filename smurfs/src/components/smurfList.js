import React, {Component} from 'react';
import smurfCard from './smurfCard';
import axios from 'axios';


if(1 == 1){
    axios.get('http://localhost:3333/smurfs')
         .then(response => console.log(response))
         .catch(error => console.log(error))
}  

const smurfList = () =>{

    return(
        <div>
            <smurfCard />
        </div>
    )
}

export default smurfList;