import React from 'react';
import { View,Button,TouchableOpacity,Alert} from 'react-native';
import { Container, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import styles from '../../styles' ;



import { Entypo ,Ionicons} from '@expo/vector-icons';

class E11Q extends React.Component {
    static navigationOptions = {
      title: 'سؤال 1',
      headerBackTitle:'للخلف',
      headerTintColor: 'red'
      
    };
  
    constructor(props) {
      super(props);
      this.state = { 
                      choice1:false
                     ,choice2:false
                     ,choice3:false
                     ,counter:0
                    }
                     ;
    }
  
  conditional=()=>{
       this.state.choice1 == true && this.state.choice2 == false && this.state.choice3 == false
       ? this.props.navigation.navigate('E12') 
      //  && elec1Array.push(1,2) && Alert.alet(elec1Array)
       : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
  }
  
    render() {

      return (
    <Container>
         {/* <Header /> */}
         <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right",margin:10}}>
        اصلاح ما تمتنع الشركات عن اصلاحه يسمى .... .... 
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
                <Text>الصيانة البديلة</Text>
              </Body>
            </ListItem>
  
            <ListItem>
            <CheckBox 
              color="green"
                 checked={this.state.choice2} 
              onPress= { ()=> { 
                this.setState({
                choice2:!this.state.choice2
              })
              }} /> 
            <Body>
                <Text>صيانة التوكيل</Text>
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
                <Text>صيانة غير حقيقية</Text>
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
  
  export {E11Q} ;