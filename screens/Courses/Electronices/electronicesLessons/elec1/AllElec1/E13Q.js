import React from 'react';
import { View,Button,TouchableOpacity,Alert} from 'react-native';
import { Container, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import styles from '../../styles' ;


import { Entypo ,Ionicons} from '@expo/vector-icons';

 class E13Q extends React.Component {
    static navigationOptions = {
      title: 'سؤال 3',
      headerBackTitle:null,
      headerTintColor: 'red'
    };
  
    constructor(props) {
      super(props);
      this.state = { choice1:false,choice2:false,choice3:false,choice4:false};
    }
  
  conditional=()=>{
       this.state.choice1 == true && this.state.choice2 == true && this.state.choice3 == true || this .state.choice4 == true
       ? this.props.navigation.navigate('Electronices2')
       : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
  }
    render() {
      return (
    <Container>
         {/* <Header /> */}
         <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right",margin:10}}>
  أهم اسباب امتناع الشركات عن الصيانة الحقيقية هو :       </Text>
  
         <Content >
  
            <ListItem style={{ alignSelf:'flex-start',marginTop:20}}>
              <CheckBox 
                 checked={this.state.choice1} 
              onPress= { ()=> { this.setState({
                choice1:!this.state.choice1
              })
              }} />
              <Body>
                <Text>ان التصنيع ارخص من الاصلاح</Text>
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
                <Text>عدم القدرة علي اعطاء معايير للضمان بعد الاصلاح</Text>
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
                <Text>تسويق المنتجات الجديدة</Text>
              </Body>
            </ListItem>
  
             <ListItem>
            <CheckBox 
              color="black"
                 checked={this.state.choice4} 
              onPress= { ()=> { this.setState({
                choice4:!this.state.choice4
              })
              }} /> 
             <Body>
                <Text>جميع ما سبق</Text>
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
  
  export {E13Q} ;