import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    TouchableHighlight, 
    Image, 
    Text,
    ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';
import {
    modificaEmail, 
    modificaSenha, 
    modificaNome,
    cadastraUsuario
} from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
    
    _cadastraUsuario() {
        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if(this.props.loadingCadastro) {
            return (<ActivityIndicator size="large" />);
        }

        return (<Button color="#115E54" title="Cadastrar" onPress={() => this._cadastraUsuario() } />);
    }
    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={ require('../imgs/bg.png') } > 
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput 
                            value={ this.props.nome } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="Nome"
                            placeholderTextColor="#fff"
                            onChangeText={ texto => this.props.modificaNome(texto) } />
                        <TextInput 
                            value={ this.props.email } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="E-mail" 
                            placeholderTextColor="#fff"
                            onChangeText={ texto => this.props.modificaEmail(texto) } />
                        <TextInput 
                            secureTextEntry
                            value={ this.props.senha } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="Senha"
                            placeholderTextColor="#fff"
                            onChangeText={ texto => this.props.modificaSenha(texto) } />   
                        <Text style={{ color: '#FF0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>                     
                    </View>
                    <View style={{ flex: 1}}>
                        { this.renderBtnCadastro() }                        
                    </View>
                </View>
            </Image>
        )
    }
}

mapStateToProps = state => ({
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loadingCadastro: state.AutenticacaoReducer.loadingCadastro
});

export default connect(mapStateToProps, 
                        {
                            modificaEmail,
                            modificaSenha,
                            modificaNome,
                            cadastraUsuario
                        })(FormCadastro);