import{
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    fetchSmurfs
} from '../actions/actions';


let payload= "";



const initialStore = {
    smurfs: [],
    isFETCHING:"",
    error:'',
}


const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_START":
            return{
                ...state,
                isFETCHING: true,
                error: ''
            }
        case "FETCH_SUCCESS":
            return{
                ...state,
                smurfs: action.payload,
                isFETCHING:false,
                error:''
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                isFETCHING:false,
                error: payload.type
            }
        default:
            return state;
    }


}


export default reducer;