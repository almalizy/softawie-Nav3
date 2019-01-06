import React from 'react';
import { TouchableOpacity,View,Image ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { Ionicons,Entypo } from '@expo/vector-icons';
import { Header} from '../src/components/common';


class aboutDevoloper extends React.Component {
  
    static navigationOptions = {
      title: 'عن المبرمج',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),tabBarIcon: () => (<Icon  name='thumbnails' 
      />)
    };
  
    render() {
      
      return (
 <View >

      <Header title='للتواصل' />
       <View style={styles.container}>
        <TouchableOpacity  style={styles.container}
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-apps" size={42} color="#e67e22" />
        </TouchableOpacity>
        </View>
          
        <View style={styles.view}>
          <Text style={styles.text}>About the App devoloper</Text>

           <Text style={styles.text}>  
           Android and ios Apps Devoloper
            </Text>
            
          <Text style={styles.text2}> about 2 years Experience at React Natvie devoloper and
            working at alot of frameworks like Native Base and Redux ....
          </Text> 

          <Text style={styles.text2}> also i had  Experiance at JAVA , JS , HTML and  CSS  
          </Text>

          <Text style={styles.text2}> 
          I had  over 13 years past work Experiance at mobile software
          </Text>

         

           

            <Text style={styles.text2}> 
            experiance at APi , Node and Mongo DB 
            </Text>

            <Text style={styles.text}>
            Email : softawie@gmail.com
            </Text>

            <Text style={styles.text}> 
            </Text>

            <Text style={styles.text}> 
           </Text>

          <Text style={styles.text}>  
          </Text>

         <Text style={styles.text}> 
         </Text>

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
       justifyContent:'center'
    },
  view: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:100
 },
}
  export default aboutDevoloper;