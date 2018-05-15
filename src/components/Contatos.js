import React, { Component }  from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Contatos extends Component {
    
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        
        this.state = { fonteDeDados: ds.cloneWithRows(this.props.contatos)}
    }
    componentWillMount() {
        this.props.contatosUsuarioFetch();
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return(
            <ListView
                dataSource={ this.state.fonteDeDados }
                renderRow={ data => <View><Text>{data}</Text></View>}
            />            
        )

        return <View><Text>text</Text></View>
    }  
} 

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => { return { ...val, uid } } );
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);