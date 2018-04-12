import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    TouchableHighlight, 
    Image,
    ActivityIndicator 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class FormLogin extends Component {

    _autenticarUsuario() {
        this.props.autenticarUsuario(this.props.email, this.props.senha);
    }

    renderBtnAcessar() {
        if(this.props.loadingLogin) {
            return (<ActivityIndicator size="large" />);
        }

        return (<Button color="#115E54" title="Acessar" onPress={ () => this._autenticarUsuario() } />);
    }
    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={ require('../imgs/bg.png') } > 
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }} >WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
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
                        <Text style={{ color: '#FF0000', fontSize: 18 }}>{this.props.erroLogin}</Text>
                        <TouchableHighlight
                            onPress={ () => Actions.formCadastro() }>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastre-se!</Text>
                        </TouchableHighlight>                
                    </View>
                    <View style={{ flex: 2 }}>
                       { this.renderBtnAcessar() } 
                    </View>
                </View>
            </Image>
        );
    }
}

mapStateToProps = state => ({
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loadingLogin: state.AutenticacaoReducer.loadingLogin    
});

export default connect(mapStateToProps, 
                        {
                            modificaEmail,
                            modificaSenha,
                            autenticarUsuario
                        })(FormLogin);


