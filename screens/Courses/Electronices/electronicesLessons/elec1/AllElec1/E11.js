
import React from 'react';
import { View,Button,TouchableOpacity,Text,Alert} from 'react-native';
import styles from '../../styles' ;


import { Entypo ,Ionicons} from '@expo/vector-icons';

 class E11 extends React.Component {
    //  next line only for navigation title ...
  
    static navigationOptions = ({ navigation }) => { 
      return {
          title: ' درس 1',
          headerLeft : (<TouchableOpacity 
                          onPress={() => navigation.navigate('Electronices1')} 
                          >
                          <Text>للخلف </Text>
                          <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                        </TouchableOpacity>)
          ,headerStyle: { backgroundColor: '#f4511e' }
          ,headerTintColor: '#fff'
          ,headerTitleStyle: { fontWeight: 'bold'}
          }; 
        };
  
      render (){
          return (
  <View>  
     
      <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
         <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>الدرس الاول مقدمة عن الصيانة </Text>
      </View>
  
      <View > 
             <View style={{right:10}}>
                <Text style={styles.textStyles}  >
                       في ظل التقدم العصري وانتشار التقنية الحديثة 
                </Text>
  
                <Text style={styles.textStyles}  >
                    نظرا لحاجة الناس الملحة الي الموبايلات 
                </Text>
  
                <Text style={styles.textStyles} >
                وانتشار التقنية بالشكل الذي سيطر علي الاسواق     
                </Text>
             
  
              
                <Text style={styles.textStyles} >
                    حتي اصبح الموبايل من ضرورات الحياة    
                </Text>
  
                <Text style={styles.textStyles} >
                      ونظرا لعدم تقديم التوكيلات لصيانة حقيقة للموبيلات  
                </Text>
  
                <Text style={styles.textStyles} >
                       فمن هنا ظهرت مهنة فني الصيانة{'\n'} او فني الصيانة البديلة 
                </Text>
  
                    <Text style={styles.textStyles} >
                الصيانة البديلة : تعني ان تكون قادرا علي اصلاح ما تمتنع عن اصلاحه شركات صيانة المحمول    
                          </Text> 
  
                <Text style={styles.textStyles} >
                لذلك يتبادر الي الذهن سؤال .
                </Text> 
  
                <Text style={styles.textStyles} >
                ما هي أدوات الصيانة البديلة؟
                </Text> 
                
                <Text style={styles.textStyles} >
                 أدوات الصيانة البديلة :هي أدوات مبتكرة تعارف علي استخدامها فنيون الصيانة عبر الأجيال 
               </Text>
  
               <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow',textAlign: "right"}} >
                       الخلاصة :
               </Text>  
  
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',backgroundColor:'yellow',textAlign: "right"}} >
             الصيانة البديلة : هي اصلاح ما تمتنع وكالات الموبايل عن اصلاحه
              </Text>
              
            </View>
            <Button 
                title='الاستمرار' 
                style={styles.buttons}
                onPress = {() => this.props.navigation.navigate('E11Q')}
                />     
      </View>
  
      <View  style={{ 
         flex: 3,
         flexDirection:'row',
         alignItems:'center',
         margin:150 ,
         left:140
         }}> 
             
      </View>
  </View>
  
          );
      }
  }
  
  export {E11} ;