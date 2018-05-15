import * as types from "../actions/types";

const INITIAL_STATE = { }

export default (state = INITIAL_STATE, action) => {
    //console.log('teste', action.payload);
    switch(action.type) {
        case types.LISTA_CONTATO_USUARIO:
            return action.payload;
        default: 
            return state;
    }
}