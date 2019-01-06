import _ from 'lodash';
import React, { Component } from 'react';
import { Image,BackHandler,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Slides from './Slides';

import firstImage from "../assets/1.png";
const secoundImage = require("../assets/2.png");
const thirdImage = require("../assets/3.jpg");

const firstLogo = require("../assets/logo-kitchen-sink.png");
const twoLogo = require("../assets/logo-kitchen-sink.png");
const threeLogo = require("../assets/logo-kitchen-sink.png");



const SLIDE_DATA = 
[
  { text: ' أول تطبيق لتعليم صيانة المحمول', color: 'black',imageBackground:firstImage ,imageLogo:firstLogo },
  { text: 'كل ما تحتاجه لتعلم الصيانة ', color: 'black',imageBackground:secoundImage, imageLogo:twoLogo},
  { text: 'HARDWARE هاردوير' + '\n\t\t' + '\n' + 'SOFTWARE سوفت وير ', color:'black',imageBackground:thirdImage,imageLogo:threeLogo}
];

class MainScreen extends Component {
  static navigationOptions = {
      
    title: 'الرئيسة',
    drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/tools.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
       tabBarIcon: () => (<Icon  name='home' 
      />),
      
      };
      
  onSlidesComplete = () => {
    // this.props.navigation.navigate('Home'),Alert.alert('مرحبا بكم في شركة تمكين الشاملة المحدودة');
    this.props.navigation.navigate('Login');
  }

   // the next part for canceled retrun back but not working yet ...

   componentWillMount() {
    setTimeout(() => {
      BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
    }, 800);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    Alert.alert(
      'هل ترغب في مغادرة التطبيق ',
      'هل ترغب في مغادرة التطبيق',
      // { text: 'للتسجيل ', onPress: () => Linking.openURL('http://tamkeen.sa/adv.html') },
      [ 
        { text: ' التقييم', onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=www.tamkeen.sa.com') },
        { text: 'نعم', onPress: () => BackHandler.exitApp() },
        { text: 'لا', onPress: () => Alert.alert('استمتع بتصفح تطبيق سوفتاوي'), style: 'cancel' },
       ],
      { cancelable: false }

    );
    return true;
    }
// finished here ........

  render() {
    return (
      <Slides data={SLIDE_DATA} 
              onComplete={this.onSlidesComplete}
              style={{justifyContent:'center',alignItems:'center'}}
              />

    );
  }
}

styles={
  icon:{
    width: 24,
    height: 24,
    // tintColor:'white'
  },
}
export default MainScreen ;
