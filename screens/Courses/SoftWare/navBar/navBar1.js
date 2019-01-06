import React ,{Component} from 'react';

import { Entypo } from '@expo/vector-icons';
import { View,Text,Button,TouchableOpacity,TextInput,Alert} from 'react-native';


class  navBar1 extends Component {
    render(){
        return (
<View style={{flexDirection: 'row',justifyContent:'center' }} > 

<TouchableOpacity 
     onPress = {() => this.props.navigation.navigate('_3QS')} style={styles.buttons}>
     <Entypo  name="help" size={32} color="red" />
</TouchableOpacity>

<TouchableOpacity 
     onPress = {() => this.props.navigation.navigate('_3S')} style={styles.buttons}>
     <Entypo  name="arrow-bold-left" size={32} color="black" />
</TouchableOpacity>

<TouchableOpacity 
     onPress = {() => this.props.navigation.navigate('_2QS')} style={styles.buttons}>
     <Entypo  name="help" size={32} color="red" />
</TouchableOpacity>

<TouchableOpacity 
     onPress = {() => this.props.navigation.navigate('_2S')} style={styles.buttons}>
     <Entypo  name="arrow-bold-left" size={32} color="black" />
</TouchableOpacity>

<TouchableOpacity 
     onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
     <Entypo  name="help" size={32} color="red" />
</TouchableOpacity>

<TouchableOpacity 
     onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
     <Entypo  name="arrow-bold-left" size={32} color="black" />
</TouchableOpacity>

</View>
        );
    }
}

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
    }
}

export default navBar1 ;