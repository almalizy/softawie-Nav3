import React from 'react';
import { TouchableOpacity, View,Image,Button,Text,Alert } from 'react-native';
import styles from './electronicesLessons/styles' ;

let elec1Array = [];

class ElectronicesScreen extends React.Component {
    render() {
      const state = {
        elec1Array:[]
      }
     const navigation = this.props.navigation
       return (
<View >
     <View></View>
   

     <View  style = {styles.buttonCOntainer} > 
         <TouchableOpacity title='test ' 
               onPress = {() => navigation.navigate('Electronices2',{
                 otherParams :'anything'
               })}
               style = {styles.buttons} >
             <Text style={styles.textTitle}> الباب الثاني </Text>
             <Text style={[styles.text,{fontSize:10}]}> مقدمة عن العدد والأدوات </Text>
         </TouchableOpacity>

           <TouchableOpacity title='test ' 
             onPress = {() => navigation.navigate('Electronices1',{
              elec1Array :elec1Array[0]
             })}
               style = {styles.buttons} >
               <Text style = {styles.textTitle} > الباب الأول </Text>
               <Text style={styles.text}> مقدمة عن الصيانة </Text>
           </TouchableOpacity>

   </View>

   <View  style = {styles.buttonCOntainer} > 
         <TouchableOpacity title='test '
             onPress = {() => navigation.navigate('Electronices4')} 
             style = {styles.buttons} >
             <Text style={styles.text}> الباب الرابع</Text>
             <Text style={styles.text}>  الباور سبلاي   </Text>
         </TouchableOpacity>

         <TouchableOpacity title='test ' 
            onPress = { () => navigation.navigate('Electronices3')}
            style={styles.buttons} >
             <Text style = {styles.text} >  الباب الثالث </Text>
             <Text style = {styles.text} >   الملتيميتر </Text>
         </TouchableOpacity>
         
   </View>
   <View  style={styles.buttonCOntainer}> 
         <TouchableOpacity title='test ' 
           onPress = { () => navigation.navigate('Electronices6')}
           style={styles.buttons}>
           <Text style={styles.text}> الباب السادس </Text>
        </TouchableOpacity>

           <TouchableOpacity title='test ' 
                 onPress = {() => navigation.navigate('Electronices5',{
                   otherParam :'anything'
                 })}
                 style={styles.buttons}
             >
             <Text style={styles.text}> الباب الخامس </Text>
          </TouchableOpacity>
   </View>

   <View  style={styles.buttonCOntainer}> 
         <TouchableOpacity title='test ' 
           onPress = {() => navigation.navigate('_2')} 
           style={styles.buttons}>
             <Text style={styles.text}> الباب التاسع </Text>
         </TouchableOpacity>

         <TouchableOpacity title='test' 
             onPress = {() => navigation.navigate('_2')} 
             style={styles.buttons}>
           <Text style={styles.text}> الباب الثامن  </Text>
         </TouchableOpacity>
   </View>


</View>
     );
   }
 }


 export default ElectronicesScreen ;