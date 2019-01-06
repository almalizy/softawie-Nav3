import React from 'react';
import { View,Button,TouchableOpacity,Alert} from 'react-native';
import { Container, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import styles from '../../styles' ;


import { Entypo ,Ionicons} from '@expo/vector-icons';

class E12 extends React.Component {
    static navigationOptions = {
      title: 'صيانة الموبيلات',
      headerTintColor: 'green'
    };
    render() {
      return (
        
          
      <View  style={{margin:7}}> 
  
         <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
         <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}> امتناع الشركات عن صيانة الموبيلات  </Text>
         </View>
  
             <View style={{right:10}}>
                <Text style={styles.textStyles}  >
            رغم توافر كافة  المعلومات لدي شركات الصيانة عن منتجاتها    
            </Text>
  
                <Text style={styles.textStyles} >
              ورغم قدرة الشركات علي توفير كافة المعدات اللازمة للصيانة 
               </Text>
  
                <Text style={styles.textStyles} >
              وكذلك قدرة الشركات علي توفير كافة قطع الغيار   
             </Text>
             
  
              
                <Text style={styles.textStyles} >
            الا ان الشركات تمتنع عن تقديم صيانة كاملة للموبيلات     
                </Text>
  
                <Text style={styles.textStyles} >
              وتنحصر صيانة الشركات او الوكلاء في تغيير المكونات الخارجية 
              لكنها تمتنع تماما عن تقديم اي اصلاحات في اللوحة الام وتسمى
              (Mother Board)  
               </Text>
  
                <Text style={styles.textStyles} >
                       كما تسمى ايضا
                       (PCB)
                        وتسمى بين الفنيين بوردة               
                        
                </Text>
  
                   
              
            </View>
  
            <Button 
                title='الاستمرار' 
                style={styles.buttons}
                onPress = {() => this.props.navigation.navigate('E12Q')}
                />
                
      </View>
      );
    }
  }

  export {E12} ;