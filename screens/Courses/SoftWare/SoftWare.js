import React from 'react';
import {Alert ,TouchableOpacity, View,Image,Button,Text,ImageBackground } from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import software1Screen from './softwareLessons/software1';
import software2Screen from './softwareLessons/software2';
import software3Screen from './softwareLessons/software3';
import software4Screen from './softwareLessons/software4';
import software5Screen from './softwareLessons/software5';
import software6 from './softwareLessons/software6';

class softwareScreen extends React.Component {
  
  static navigationOptions =  ({ navigation }) => { 
    return {
  title: 'السوفت وير',
  headerLeft :(<TouchableOpacity 
                onPress={() => navigation.navigate('myHome')} 
                >
                <Text>للخلف </Text>
                <Entypo  name="arrow-with-circle-left" size={32} color="white" />
              </TouchableOpacity>)
  ,headerStyle: { backgroundColor: '#f4511e' }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
 ,drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../image/software.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /> )
  }; 
  }

    render() {
      
      return (
<View style={styles.allContainer} behavior="padding">       
<ImageBackground 
        source={require('../../image/softwarebackg.jpg')}
        style={styles.imageContainer}
        imageStyle={styles.image}
        >
    <View></View>
       <View >
        <TouchableOpacity  style={styles.container}
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-apps" size={42} color="#e67e22" />
        </TouchableOpacity>
        </View>

      <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('software2')} style={styles.buttons}>
          <Text style={styles.textTitle}> الباب الثاني </Text>
          <Text style={styles.text}> شرح برنامج ايتيونز وأهم استخداماته </Text>

            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.push('software1')} style={styles.buttons}>
            <Text style={styles.textTitle}> الباب الأول </Text>
            <Text style={styles.text}> مقدمة عن السوفت وير </Text>

            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_4')} style={styles.buttons}>
            <Text style={styles.text}>   الباب الرابع </Text>
            <Text style={styles.text}> شرح تحميل السوفت وير وتفليش الجوال من خلال الاودن </Text>

            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3')} style={styles.buttons}>
            <Text style={styles.text}> الباب الثالث </Text>
            <Text style={styles.text}>  برنامج السمارت سويتش ونسخ بيانات الموبايل </Text>

            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test '
          onPress = {() => Alert.alert('انتظره في التحديث القادم ان شاء الله')} style={styles.buttons}>
            <Text style={styles.text}> الباب السادس </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' 
            onPress = {() => Alert.alert('انتظره في التحديث القادم ان شاء الله')} style={styles.buttons}>
            <Text style={styles.text}> الباب الخامس </Text>

            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test '
           onPress = {() => Alert.alert('انتظره في التحديث القادم ان شاء الله')} style={styles.buttons}>
            <Text style={styles.text}> الباب الثامن </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' 
            onPress = {() => Alert.alert('انتظره في التحديث القادم ان شاء الله')} style={styles.buttons}>
            <Text style={styles.text}> الباب التاسع </Text>
            </TouchableOpacity>
    </View>
    </ImageBackground>

</View>
      );
    }
  }
  
  
  const softNav = StackNavigator({
    software:softwareScreen,
    software1: StackNavigator({
      software1:software1Screen,
      software2:StackNavigator({
        software1:software2Screen,
        software3:StackNavigator({
          software3:software3Screen,
          software4:StackNavigator({
            software4:software4Screen,
            software5:software5Screen
          },{
            headerMode: 'none',
            mode: 'modal',
            navigationOptions: {gesturesEnabled: false,}
            })
        },{
          headerMode: 'none',
          mode: 'modal',
          navigationOptions: {gesturesEnabled: false,}
          })
      },{
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {gesturesEnabled: false,}
        })
    },{
      headerMode: 'none',
      mode: 'modal',
      navigationOptions: {gesturesEnabled: false,}
      })
  },{
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {gesturesEnabled: false,}
    })

                                
  const styles = {
    icon:{
      width: 24,
      height: 24,
    },
    touchable:{
      minWidth: 60
   },
    container:{
      // flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      // paddingTop:20,
      // padding:10

    },
    buttons:{
    width: 150,
    height: 100,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#36f',
    padding: 10,
    margin:5,
    marginTop:5,
    },
    buttonCOntainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'row',
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
    fontSize: 15,
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
    allContainer: {
      flex: 1,
     backgroundColor: '#34495E',
    }
}
  export default softNav;