import React,{ Component } from 'react';
import { TextInput,TouchableOpacity, Text, View,Button,Image ,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons,Entypo } from '@expo/vector-icons';
import { Header} from '../components/common';

 class contactUsScreen extends Component {
  static navigationOptions = {
    title: 'تواصل معنا',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./image/connect.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),tabBarIcon: () => (<Icon  name='ios-basket' 
    />)
  };

 
  
render(){
  function openSoftawie (){
    Linking.openURL('http://www.softawie.com')
  }
  return(
  <View >
       <Header title='للتواصل' />
       <View style={styles.container}>
        <TouchableOpacity  style={[styles.container,{paddingTop:10,}]}
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-apps" size={42} color="#e67e22" 
           />
        </TouchableOpacity>
        </View>

        <View style={{alignItems:'center', justifyContent:'center',marginTop:50}}>
        <Text style={styles.text}>
            Email : softawie@gmail.com
         </Text>

       
        

         
         <Text style={styles.text}>
زيارة موقعنا         </Text>
         <TouchableOpacity onPress= {openSoftawie}>

        <Text style={styles.text}>
        www.softawie.com
         </Text>
         </TouchableOpacity>

         </View> 

         

</View>

      );
    }
  } 



  const styles = {
        icon:{
          width: 24,
          height: 24,
        },
        container:{
          // flex:1,
          alignItems:'flex-end',
          justifyContent:'flex-start',
          paddingTop:10,
          padding:10
        },
        text : {
           alignItems:'center',
           fontSize: 25,
           justifyContent:'center',
           marginTop:100
        },
        }
   
  export default contactUsScreen ;