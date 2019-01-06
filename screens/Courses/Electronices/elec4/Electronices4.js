import React from 'react';
import {WebView, View,KeyboardAvoidingView,Text,Button,TouchableOpacity,TextInput,Alert,ScrollView,Image,Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';

import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

import Quiez from '../Quiez';

import {Constants} from 'expo'

let id = 0

 class Electronices4 extends React.Component {
  constructor() {
    super()
    this.state = {
      choices: [],
    }
  }

  addQuiez() {
    // let rand = Math.random();
    id++
    const text = `TODO number ${id}`
    this.setState({
      choices: [
        ...this.state.choices,
        {id: id, text: text, checked: false},
      ], 
    })
  }

  removeQuiez(id) {
    this.setState({
      choices: this.state.choices.filter(todo => todo.id !== id)
    })
  }

  toggleQuiez(id) {
    this.setState({
      choices: this.state.choices.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.choices.length}</Text>
        <Text>Unchecked todo count: {this.state.choices.filter(todo => !todo.checked).length}</Text>
        <Button 
         onPress={() => this.addQuiez()} title="Add TODO" />
        <ScrollView style={styles.fill} >
          {this.state.choices.map(todo => (
            <Quiez
            // we add key={todo.id} to remove error  : Each child in an array or iterator should have a unique "key" prop.
              key={todo.id}
              onToggle={() => this.toggleQuiez(todo.id)}
              onDelete={() => this.removeQuiez(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}



// const ElectronicesNav4 = 
// StackNavigator({
//   Electronices4:{screen:Electronices4},
//   _1S: {screen :StackNavigator({    
//                _1S:{screen:_1S},
//                _1QS: {screen :StackNavigator({    
//                             _1QS:{screen:_1QS},
//                             _2S:{screen:StackNavigator({
//                                        _2S:{screen:_2S},
//                                        _2QS:{screen:StackNavigator({
//                                                    _2QS:{screen:_2QS},
//                                                    _3S:{screen:StackNavigator({
//                                                               _3S:{screen:_3S},
//                                                               _3QS:{screen:_3QS}
//                                                    },{
//                                                     headerMode: 'none',
//                                                     mode: 'modal',
//                                                     navigationOptions: {gesturesEnabled: false,}
//                                                     })}
//                                        },{
//                                         headerMode: 'none',
//                                         mode: 'modal',
//                                         navigationOptions: {gesturesEnabled: false,}
//                                         })},
//                                                      },{
//                                                       headerMode: 'none',
//                                                       mode: 'modal',
//                                                       navigationOptions: {gesturesEnabled: false,}
//                                                       })}
//                                           },{
//                                             headerMode: 'none',
//                                             mode: 'modal',
//                                             navigationOptions: {gesturesEnabled: false,}
//                                             })}         
//                               },{
//                                 headerMode: 'none',
//                                 mode: 'modal',
//                                 navigationOptions: {gesturesEnabled: false}
//                               })}
//                             },{
//                              headerMode: 'none',
//                              mode: 'modal',
//                              navigationOptions: {gesturesEnabled: false,}
//                              }) ;


const styles = {
  buttonCOntainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  buttons:{
      borderColor : 'red',
  },
  textTitle:{
    color:'blue',fontWeight:'bold',fontSize: 20 
  },
  text:{ 
    fontSize: 18 
    ,alignSelf:'flex-end'
    ,textAlign: "right"
     },
  textShort:{
     fontSize: 18 
     ,alignSelf:'flex-end'
     ,fontWeight:'bold'
     ,backgroundColor:'yellow'
    },
    imageStyles:{
      // position:'absolute',
      // backgroundColor:'blue',
      // borderRadius:5,
      flexDirection:'row',
      height:300,
      width:400,
      padding:5,
      paddingTop:16,
      bottom :20 ,
      right :10,
      left : 10 ,
      resizeMode:'contain',
      // borderWidth:1,
      // borderColor:'white',
      // borderWidth: 5,
      // borderRadius: 5,
      // flex:2
    },
    todoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    appContainer: {
      paddingTop: Constants.statusBarHeight,
    },
    fill: {
      flex: 1,
    }
  
}

export default Electronices4;

