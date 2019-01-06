import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Button,Image } from 'react-native';

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      title:'الاشعارات'
     , drawerLabel: 'سلة ',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View style={styles.container}>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            title="Go to notifications">
            <Image
            source={require('./image/list.png')}
            style={styles.icon}
            />
            </TouchableOpacity>

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
          flex:1,
          alignItems:'flex-end',
          justifyContent:'flex-start',
          paddingTop:60,
          padding:20
    
        }
  }
  export default MyNotificationsScreen ;