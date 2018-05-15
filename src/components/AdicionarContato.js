import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail } from '../actions/AppActions';
import { adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }} >
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <TextInput
                        placeholder='E-mail'
                        value={this.props.adiciona_contato_email}
                        style={{ fontSize: 20, height: 45 }}
                        onChangeText={ (texto) => this.props.modificaAdicionaContatoEmail(texto) }
                    />
                
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <Button title="Adicionar" color="#115E54" onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email) }></Button>

                    <Text style={{ color: '#F00', fontSize: 20 }}>
                        {this.props.cadastro_resultado_txt_erro}
                    </Text>
                </View>
            </View>
        )
    }
} 

mapStateToProps = state => ({
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro
})

export default connect(mapStateToProps, 
                        {
                            modificaAdicionaContatoEmail,
                            adicionaContato
                        })(AdicionarContato);