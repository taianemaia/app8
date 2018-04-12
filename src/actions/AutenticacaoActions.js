import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import * as types from './types';


export const modificaEmail = (texto) => {
    return { 
        type: types.MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: types.MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: types.MODIFICA_NOME,
        payload: texto
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {

        dispatch ({ type: types.CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(usuario => {
            let emailB64 = b64.encode(email);

            firebase.database().ref('/contatos/' + emailB64)
                .push( { nome })
                .then(value => cadastraUsuarioSucesso(dispatch));
        })
        .catch(erro => cadastraUsuarioErro(erro, dispatch));
    }
}

const cadastraUsuarioSucesso = (dispatch)  => {
    dispatch ({ type: types.CADASTRO_USUARIO_SUCESSO });

    Actions.boasVindas();
}

const cadastraUsuarioErro = (erro, dispatch)  => {
    dispatch ({
                type: types.CADASTRO_USUARIO_ERRO,
                payload: erro.message
    });
}
 
export const autenticarUsuario = (email, senha) => {
    
    return dispatch => {

        dispatch ({ type: types.LOGIN_EM_ANDAMENTO });
        
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => {
            dispatch({ type: types.LOGIN_USUARIO_SUCESSO });

            Actions.principal();
        })
        .catch(erro => dispatch({ type: types.LOGIN_USUARIO_ERRO, payload: erro.message }));
    }    
}



















