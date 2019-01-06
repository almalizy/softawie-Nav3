//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import firebase from './firebase';

import { Card, CardItem, Button, Input, Spinner } from '../../components/common';


// create a component
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    onLoginPressed () {
        const { email, password } = this.state;
        
        this.setState({ loading: true, error: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onAuthSuccess.bind(this))
                .catch(this.onAuthFailed.bind(this));
            }); 
    }

    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onAuthFailed() {
        this.setState({ 'error': 'الايميل او الباسورد خطأ', loading: false });
    }

    showButtonOrSpinner() {
        if (this.state.loading) return <Spinner  />;

        return (
            <Button 
            onPress={this.onLoginPressed.bind(this)}>
            تسجيل الدخول
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label='Email'
                        value={this.state.email}
                        placeholder='ادخل الايميل'
                        secureTextEntry={false}
                        onChangeText={ (email) => this.setState({ email }) }
                    />
                </CardItem>
                
                <CardItem>
                    <Input
                        label='Password'
                        value={this.state.password}
                        placeholder='ادخل الرمز السري'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardItem>
                
                <Text style={styles.errorMessage} >{this.state.error}</Text>

                <CardItem>
                    { this.showButtonOrSpinner() }
                </CardItem>

            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#FF0000',
        marginTop: 5
    },
});


//make this component available to the app
