import React from 'react';
import { TouchableOpacity,Linking, View,ImageBackground,Text ,Alert} from 'react-native';

import { Entypo } from '@expo/vector-icons';



export default  class MyHomeScreen extends React.Component {
    render() {
      function openSoftawie (){
        Linking.openURL('http://www.softawie.com')
      }
      return (
<View style={styles.allContainer} behavior="padding">       
        <ImageBackground 
        source={require('../../assets/images/mobilerepaire.jpg')}
        style={styles.imageContainer}
        imageStyle={styles.image}
        >
     
       <View >
          <TouchableOpacity style={styles.touchable}
              onPress={() => this.props.navigation.openDrawer()} >
            <Entypo name="grid" size={42} color="#e67e22" />
          </TouchableOpacity>
        </View>

      <View  style={styles.buttonContainer}> 
           <TouchableOpacity title='test ' 
                onPress = {() => this.props.navigation.navigate('Tools')} style={styles.buttons}>
                <Text style={styles.textTitle}> Tools </Text>
                <Text style={styles.text}> ادوات الصيانة  </Text>
            </TouchableOpacity>

             <TouchableOpacity title='test ' 
                onPress = {() => this.props.navigation.navigate('softWare')} style={styles.buttons}>
                <Text style={styles.textTitle}> SoftWare </Text>
                <Text style={styles.text}> السوفت وير </Text>
            </TouchableOpacity>


           <TouchableOpacity title='test '
                onPress = {() => this.props.navigation.navigate('Electronices')} style={styles.buttons}>
                <Text style={[styles.textTitle , { fontSize: 15}]}> Electronices Basices </Text>
                <Text style={styles.text}> الأساسيات الالكترونية </Text>
            </TouchableOpacity>

           

            <TouchableOpacity title='test ' 
                onPress = {() => Alert.alert('انتظره في التحديث القادم ان شاء الله')} style={styles.buttons}>
                <Text style={styles.textTitle}> HardWare  </Text>
                <Text style={styles.text}> الهاردوير  </Text>
            </TouchableOpacity>
         </View>

          <View style={{marginTop:230,alignItems:'center',justifyContent:'center',}}>
         <TouchableOpacity onPress= {openSoftawie}>
           <Text style={{fontSize: 15,color:'red',marginTop:100,margin:7}}>
            powered by : www.softawie.com
            </Text>
         </TouchableOpacity>
         </View>
</ImageBackground>
</View> 
      );
    }
  }
  


  const styles = {
    icon:{
      width: 24,
      height: 24,
    },
  //   touchable:{
  //     minWidth: 60
  //  },
  allContainer: {
    flex: 1,
        backgroundColor: '#34495E',
      },
    container:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:60,
      padding:10,
      left:50
    },
    touchable:{
      justifyContent:'flex-start',
      alignSelf:'flex-end',
      margin:10
    },
    buttons:{
    width: 200,
    height: 70,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#e67e22',
    padding: 10,
    margin:5,
    marginTop:5,
    },
    buttonContainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'column',
      justifyContent: 'space-between'
  },
  textTitle:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',
  },
  text:{
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',

  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    },
 }

// const MyHomeNav = 
// StackNavigator({
//  myHome :{Sreen:MyHome},
//  Tools:{screen :StackNavigator({ 
//        Tools:Tools,
//        softWare: {screen :StackNavigator({    
//                  softWare:{screen:softWare},
//                  Electronices:{screen:StackNavigator({ 
//                                Electronices:{screen:ElectronicesNav},
//                                hardware: {screen :StackNavigator({    
//                                       hardware:{screen:hardware},
//                                       hardware2:{screen:hardware2}   
//                                           },
//                                             {
//                                             initialRouteName: 'myHome',
//                                             headerMode: 'none',
//                                             mode: 'modal',
//                                             navigationOptions: {gesturesEnabled: false} 
//                                               })}         
//                                              },{
//                                               headerMode: 'none',
//                                               mode: 'modal',
//                                               navigationOptions: {gesturesEnabled: false} 
//                                              })}

//                                              },{
//                                             headerMode: 'none',
//                                             mode: 'modal',
//                                             navigationOptions: {gesturesEnabled: false}
//                                             })}
//                                              },{
//                                               headerMode: 'none',
//                                               mode: 'modal',
//                                               navigationOptions: { gesturesEnabled: false }  
//                                                })},   
//                                                });



