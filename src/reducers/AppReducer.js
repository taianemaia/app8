import * as types from '../actions/types'

const INITIAL_STATE = { 
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: ''
}

export default(state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch(action.type) {
        case types.MODIFICA_ADICIONA_CONTATO_EMAIL: 
            return { ...state, adiciona_contato_email: action.payload}
        case types.ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload}
        default: 
            return { ...state }
    }
}