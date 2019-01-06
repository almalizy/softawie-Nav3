import React, { Component } from 'react';
import { Button,Alert,View,Switch,StyleSheet } from 'react-native';
import {Constants} from 'expo'
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';


const Quiez = props => (
 
  <Container>
  

  <Content >

  
    {/* <Button
     onPress={props.onDelete} 
     title="delete" /> */}
    <Text>{props.todo.text}</Text>
 

     <ListItem style={{ alignSelf:'flex-start',marginTop:20}}>
     <Switch 
     value={props.todo.checked}
     onValueChange={props.onToggle} />
       <Body>
         <Text>الصيانة البديلة</Text>
       </Body>
     </ListItem>

     {/* <ListItem>
     <CheckBox 
     value={props.todo.checked}
     onValueChange={props.onToggle}
        /> 
     <Body>
         <Text>صيانة التوكيل</Text>
       </Body>
     </ListItem>

     <ListItem>
     <CheckBox 
     value={props.todo.checked}
     onValueChange={props.onToggle}
        /> 
      <Body>
         <Text>صيانة غير حقيقية</Text>
       </Body>
     </ListItem>

     <Button 
       title='check' 
       style={styles.buttons}
       onPress = {this.conditional}
       /> */}
       
   </Content>

   
 </Container>
)


  

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  fill: {
    flex: 1,
  }
})
     
export default Quiez ;