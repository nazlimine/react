import {GET_USERS, USERS_ERROR} from '../enum/types'
import axios from 'axios'

import  data_users  from "../../data/data.json";

var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/users").reply(200, {
    users: data_users
  });
  

export const getUsers = () => async dispatch => {
    try{
        const res = await axios.get("/users")
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
        console.log(res.data);

    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}