//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
// import {Button} from 'native-base';
import firebase from './firebase';
import { Header, Button, Spinner } from '../../components/common';
import LoginForm from './LoginForm';

// create a component
class LoginScreen extends Component {
    static navigationOptions = {
        title: 'تسجيل الدخول',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/images/login.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props){
        super(props);
        this.state = {
            loggedIn: null
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }else {
                this.setState({ loggedIn: false });
            }
        });
    }

    showContnets() {
        switch(this.state.loggedIn) {
            case true: 
                return  <View style={styles.logoutContainer}>
                            <Button 
                            onPress={() => firebase.auth().signOut() }
                            > تسجيل الخروج </Button>
                            <Button 
                            onPress={() =>this.props.navigation.navigate('MyHome')}>
                            الاستمرار
                            </Button>
                        </View>
        
            case false: 
                return <LoginForm />;
            default: 
                return <Spinner />;
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Header title='صفحة التسجيل' />
                { this.showContnets() }
           
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoutContainer: {
        height: 40,
        margin: 10,
      
    },
    icon:{
        width: 24,
        height: 24,
      },
});

    
export default LoginScreen;
