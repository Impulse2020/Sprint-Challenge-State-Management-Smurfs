import React, {Component, useEffect} from 'react';
import smurfCard from './smurfCard';
import axios from 'axios';
import {fetchSmurfs} from '../actions/actions';
import {connect} from 'react-redux';



const smurfList = (props) =>{
    
 {/*    useEffect(() =>{
        props.fetchPlayers()
    }, [])

*/}


    return(
        <div>
            <smurfCard />
        </div>
    )
}
 {/*  
const mapStateToProps = (state) =>{
    return{
        smurfs:state.smurfs,
        isFETCHING: state.isFETCHING,
        error: state.error
    }
}
*/}
export default smurfList