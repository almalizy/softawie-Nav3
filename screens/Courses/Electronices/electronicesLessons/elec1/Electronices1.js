import React from 'react';
import { View,Button,TouchableOpacity,Alert, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';

import styles from '../styles' ;
import {E11,E11Q,E12,E12Q,E13,E13Q} from './AllElec1';

export default class RootStack extends React.Component{
  static navigationOptions = ({ navigation }) => { 
    return {
          title: 'الباب الأول',
          headerLeft : (<TouchableOpacity 
                          onPress={() => navigation.navigate('Electronices')} 
                          >
                          <Text>للخلف </Text>
                          <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                        </TouchableOpacity>)
          ,headerStyle: { backgroundColor: '#f4511e' }
          ,headerTintColor: '#fff'
          ,headerTitleStyle: { fontWeight: 'bold'}
          }; 
        };

  render(){

    return (
      <Electronicesnav1/>
    )
  }
}


class Electronices1 extends React.Component{

  render(){
    const navigation = this.props.navigation ;
    const elec1Array = navigation.getParam('elec1Array', 'elec1Array-ID');

    return(
      <View >
     
      
            <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test ' 
                    onPress = {() => navigation.navigate('E11Q')} 
                    style={styles.buttons}>
                    <Text style={styles.textTitle}>  </Text>
                    <Text style={styles.text}> سؤال 1 </Text>
                </TouchableOpacity>

                  <TouchableOpacity title='test ' 
                      onPress = {() => navigation.navigate('E11')} 
                      style={styles.buttons}>
                      <Text style={styles.textTitle}>  </Text>
                      <Text style={styles.text}>  درس 1 مقدمة عن الصيانة  </Text>
                  </TouchableOpacity>
                
          </View>

          <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test '
                    onPress = {() => navigation.navigate('E12Q')}
                      style={styles.buttons}>
                       <Text style={styles.textTitle}>  </Text>
                    <Text style={styles.text}>  سؤال 2</Text>
                  </TouchableOpacity>

                  <TouchableOpacity title='test '
                      disabled ={counter=1 ? false : true}
                      onPress = {() => this.props.navigation.navigate('E12')} 
                      style={styles.buttons}>
                      <Text style={styles.text}>   امتناع الشركات عن الصيانة  </Text>
                  </TouchableOpacity>
          </View>

          <View  style={styles.buttonCOntainer} > 
                <TouchableOpacity 
                    title='test '
                    onPress = {() => navigation.navigate('E13Q')} 
                    style={styles.buttons}>
                    <Text style={styles.text}> ? </Text>
                    <Text style={styles.text}>سؤال 3 </Text>
                </TouchableOpacity>

                  <TouchableOpacity 
                        title='test ' 
                        onPress = {() => this.props.navigation.navigate('E13')} 
                        style={styles.buttons}>
                        <Text style={styles.text}> 
                        اسباب امتناع الشركات عن الصيانة 
                        </Text>
                  </TouchableOpacity>
          </View>
      
      </View>
            );
          }
        }





const Electronicesnav1 = 
StackNavigator({
  Electronices1:{screen:Electronices1},
  E11: {screen :StackNavigator({    
               E11:{screen:E11},
               E11Q: {screen :StackNavigator({    
                            E11Q:{screen:E11Q},
                           E12:{screen:StackNavigator({
                            E12:{screen:E12},
                            E12Q:{screen:StackNavigator({
                              E12Q:{screen:E12Q},
                                                   E13:{screen:StackNavigator({
                                                    E13:{screen:E13},
                                                    E13Q:{screen:E13Q}
                                                   },{
                                                    headerMode: 'none',
                                                    mode: 'modal',
                                                    navigationOptions: {gesturesEnabled: false,}
                                                    })}
                                       },{
                                        headerMode: 'none',
                                        mode: 'modal',
                                        navigationOptions: {gesturesEnabled: false,}
                                        })},
                                                     },{
                                                      headerMode: 'none',
                                                      mode: 'modal',
                                                      navigationOptions: {gesturesEnabled: false,}
                                                      })}
                                          },{
                                            headerMode: 'none',
                                            mode: 'modal',
                                            navigationOptions: {gesturesEnabled: false,}
                                            })}         
                              },{
                                headerMode: 'none',
                                mode: 'modal',
                                navigationOptions: {gesturesEnabled: false}
                              })}
                            },{
                             headerMode: 'none',
                             mode: 'modal',
                             navigationOptions: {gesturesEnabled: false,}
                             }) 


    


