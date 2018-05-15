import * as types from './types';
import firebase from 'firebase';
import b64 from 'base-64';
import ReduxThunk from 'redux-thunk';
import _ from 'lodash';

export const modificaAdicionaContatoEmail = texto => {
    return {
        type: types.MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {

    return dispatch => {
        let emailB64 = b64.encode(email);

        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => { 
                    if(snapshot.val()) {
                        const dadosUsuario = _.first(_.values(snapshot.val()));

                        const { currentUser } = firebase.auth();
                        let emailUsuarioB64 = b64.encode(currentUser.email);

                        firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                            .push({ email, nome: dadosUsuario.nome }) 
                            .then(() => console.log("SUCESSO"))
                            .catch(erro => console.log("ERRO " + erro));

                        dispatch({
                            type: 'actiontest'
                        })
                    } else {
                        dispatch({
                            type: types.ADICIONA_CONTATO_ERRO,
                            payload: 'E-mail informado não corresponde a um usuário válido'
                        })
                    }
                }
            );
    }
}