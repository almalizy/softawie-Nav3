import React from 'react';
import { View,Button,TouchableOpacity,Alert} from 'react-native';
import { Container, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import styles from '../../styles' ;

 class E13 extends React.Component {
    static navigationOptions = {
      title: '   اسباب امتناع الشركات عن الصيانة',
      headerTintColor: 'green'
    };
    render() {
      return (
    <View style={{margin:7}}>
           <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}> امتناع الشركات عن صيانة الموبيلات  </Text>
          </View>
  
          <View style={{right:10}}>
          <Text style={styles.textStyles} >
                ما هي أهم الاسباب التي تمنع الشركات من تقديم صيانة حقيقية   
                       </Text> 
  
                <Text style={styles.textStyles} >
              1- اسباب اقتصادية :        
                </Text> 
  
                <Text style={styles.textStyles} >
                - مثل التصنيع اقل تكلفة من الاصلاح
                {'\n'}  
                - دفع المستخدمين الي شراء المنتجات الجديدة 
              </Text> 
                
                <Text style={styles.textStyles} >
                2- أسباب فنية :
               </Text>
  
                <Text style={styles.textStyles} >
                - عدم القدرة علي تقديم معايير ثابتة لضمان الاجهزة بعد اصلاحها  
               </Text>
  
               <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow',textAlign: "right"}} >
             الخلاصة: {'\n'}
             اسباب امتناع الشركات عن الصيانة : {'\n'}
             - التصنيع ارخص من الاصلاح {'\n'}
             - لا يمكن تقديم ضمان لما تم اصلاحه {'\n'}
             - تسويق المنتجات الجديدة {'\n'}
             </Text>  
  
              <Text style={styles.textStyles} >
              لكن بالرغم من ذلك 
              {'\n'} اثبتت الصيانة البديلة وجودها ونجاحها في توفير ما امتنعت الشركات عن تقديمه وهو الصيانة الحقيقة للموبيلات           
              </Text>
            </View>
            <Button 
                title='الاستمرار' 
                style={styles.buttons}
                onPress = {() => this.props.navigation.navigate('E13Q')}
                />
        </View>
      );
    }
  }


  export {E13} ;