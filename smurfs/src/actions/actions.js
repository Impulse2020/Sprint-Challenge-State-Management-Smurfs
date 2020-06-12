import axios from 'axios';
import { response } from 'express';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSmurfs = () => {
    dispatchEvent({ type: FETCH_START });
    axios.get('http://localhost:3333/smurfs')
        .then((response) => {
            console.log(response.data)
            dispatchEvent({ type: FETCH_SUCCESS, payload: response.data });
        })
        .catch(error => dispatchEvent({ type: FETCH_FAILURE, payload: error.response }));
}

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const POSTsmurfs = (smurf) => {
    dispatchEvent({type:POST_START});

    axios.post('http://localhost:3333/smurfs')
        .then((response)=>{
            console.log(response)
        })
    .catch(error => dispatchEvent({type:POST_FAILURE}))


}