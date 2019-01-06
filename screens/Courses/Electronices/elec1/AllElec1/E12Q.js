import React from 'react';
import { View,Button,TouchableOpacity,Alert} from 'react-native';
import { Container, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import styles from '../../styles' ;


import { Entypo ,Ionicons} from '@expo/vector-icons';


class E12Q extends React.Component {
    static navigationOptions = {
      title: 'سؤال 2',
      headerBackTitle:null,
      headerTintColor: 'red'
      
    };
  
    constructor(props) {
      super(props);
      this.state = {
          choice1:false
         ,choice2:false
         ,choice3:false
        };
    }
  
  conditional=()=>{
       this.state.choice1 == true && this.state.choice2 == true && this.state.choice3 == true
       ? this.props.navigation.navigate('E13')  && this.setState({counter:counter+1})
       : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
  }
    render() {
      return (
    <Container>
         <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right",margin:10}}>
       يستخدم الفنيون كلمة البوردة للدلالة علي ....
         </Text>
  
         <Content >
  
            <ListItem style={{ alignSelf:'flex-start',marginTop:20}}>
              <CheckBox 
                 checked={this.state.choice1} 
              onPress= { ()=> { this.setState({
                choice1:!this.state.choice1
              })
              }} />
              <Body>
                <Text>Mother Board</Text>
              </Body>
            </ListItem>
  
            <ListItem>
            <CheckBox 
              color="green"
                 checked={this.state.choice2} 
              onPress= { ()=> { this.setState({
                choice2:!this.state.choice2
              })
              }} /> 
            <Body>
                <Text>اللوحة الام</Text>
              </Body>
            </ListItem>
  
            <ListItem>
            <CheckBox 
              color="black"
                 checked={this.state.choice3} 
              onPress= { ()=> { this.setState({
                choice3:!this.state.choice3
              })
              }} /> 
             <Body>
                <Text>PCB</Text>
              </Body>
            </ListItem>
  
            <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
              
          </Content>
  
          
        </Container>
      );
    }
  }
  

  export  {E12Q} ;