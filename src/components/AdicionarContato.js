import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }} >
        <View style={{ flex: 1, justifyContent: 'center' }} >
            <TextInput
                placeholder='E-mail'
                style={{ fontSize: 20, height: 45 }}
                onChangeText={ () => false }
            />
        
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }} >
            <Button title="Adicionar" color="#115E54" onPress={() => false}></Button>
        </View>
    </View>
);