import{
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    fetchSmurfs,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
    POSTsmurfs
} from '../actions/actions';






const initialStore = {
    smurfs: [],
    isFETCHING:"",
    error:'',
}


const reducer = (state = initialStore, action) => {
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
                error: action.payload
            }
        default:
            return state;
    }


}


export default reducer;