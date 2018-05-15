import * as types from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: 'taiane@teste.com',
    senha: 'taiane',
    erroCadastro: '',
    erroLogin: '',
    loadingLogin: false,
    loadingCadastro: false
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case types.MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case types.MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case types.MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case types.CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingCadastro: false }     
        case types.CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastro: false }
        case types.LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loadingLogin: false }
        case types.LOGIN_EM_ANDAMENTO: 
            return { ...state, loadingLogin: true }
        case types.CADASTRO_EM_ANDAMENTO: 
            return { ...state, loadingCadastro: true }
        default:
            return state;
    }
} 
