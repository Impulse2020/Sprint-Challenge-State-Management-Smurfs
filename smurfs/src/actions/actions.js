import axios from 'axios';


export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () =>{
    dispatchEvent({type: FETCH_START})
    axios.get('http://localhost:3333/smurfs')
        .then((response => {
            dispatchEvent({type:FETCH_SUCCESS, payload:response.data});
        }))
        .catch(error => dispatchEvent({type:FETCH_FAILURE, payload:error.response}));
        }