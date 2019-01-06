// Import libraries for making a component
import React from 'react';
import { Text, View ,Image,TouchableOpacity,Button} from 'react-native';
import { Entypo ,Icon} from '@expo/vector-icons';

class  Header extends React.Component{
  static navigationOptions = ({ navigation }) => { 
    return {
  title: 'Mobile Tools',
  headerLeft : (<Button 
                  onPress={() => navigation.navigate('myHome')} 
                  title = "للخلف" />)
  ,headerStyle: { backgroundColor: "#e67e22" }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
  ,Icon: () => (<Entypo  name='grid' />)
 ,drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../image/tools.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /> )
    , tabBarIcon: () => (<Entypo  name='grid' />),
  }; 
};


  render(){
    
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Tools ادوات صيانة الجوال</Text>
      
      
    </View>
  );
};
}
const styles = {
  icon:{
    width: 24,
    height: 24,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
