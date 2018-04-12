import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; 
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';

class App extends Component { 
    componentWillMount() {        
        firebase.initializeApp({
            apiKey: "AIzaSyDTrFj5uOS4Wj4ULiDjKzK6DCQlAHYQTL0",
            authDomain: "whatsapp-clone-71bfb.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-71bfb.firebaseio.com",
            projectId: "whatsapp-clone-71bfb",
            storageBucket: "whatsapp-clone-71bfb.appspot.com",
            messagingSenderId: "134691767859"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider> 
        );
    }
}

export default App;