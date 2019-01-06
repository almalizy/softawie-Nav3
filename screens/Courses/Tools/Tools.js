import React from 'react';
import {  View,Button,Image ,TouchableOpacity} from 'react-native';
import Header from './header';
import AlbumList from './AlbumList';
import { Entypo,Ionicons } from '@expo/vector-icons';

// Create a component
class Tools extends React.Component{
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
  }; 
};
  render(){
    return(
      <View style={{ flex: 1 }}>
       {/* <TouchableOpacity  style={styles.container}
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-apps" size={42} color="#e67e22" />
        </TouchableOpacity> */}
      <Header  />
      <AlbumList />
    </View>
    )
  }
} 



export default Tools;