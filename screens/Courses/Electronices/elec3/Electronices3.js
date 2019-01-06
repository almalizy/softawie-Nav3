import React from 'react';
import {WebView, View,KeyboardAvoidingView,Text,Button,TouchableOpacity,TextInput,Alert,ScrollView,Image,Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'axios';
import Itunes from '../itunes'
import ImageZoom from 'react-native-image-pan-zoom';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';


class Electronices3 extends React.Component{
  //  next line only for navigation title ...

  static navigationOptions = {
   title: '_1E',
   headerTitle:'مقدمة عن الصيانة ',
   headerBackTitle: '_1',  
 };

 render(){
   return(
     <View>
     <View style={{flexDirection: 'row',justifyContent:'center' }} > 

     <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('_3QE')} style={styles.buttons}>
          <Entypo  name="help" size={32} color="red" />
     </TouchableOpacity>

     <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('_3E')} style={styles.buttons}>
          <MaterialCommunityIcons  name="numeric-3-box" size={32} color="black" />
     </TouchableOpacity>

     <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('_2QE')} style={styles.buttons}>
          <Entypo  name="help" size={32} color="red" />
     </TouchableOpacity>

     <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('_2E')} style={styles.buttons}>
          <MaterialCommunityIcons  name="numeric-2-box" size={32} color="black" />
     </TouchableOpacity>

     <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('_1QE')} style={styles.buttons}>
          <Entypo  name="help" size={32} color="red" />
     </TouchableOpacity>

     <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate('_1E')} style={styles.buttons}>
          <MaterialCommunityIcons  name="numeric-1-box" size={32} color="black" />
     </TouchableOpacity>
 </View>
 <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
    <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>
      اختر احد الدروس بالضغط علي رقمه 
    </Text>
    <Text  style={{color:'blue',fontWeight:'bold',fontSize: 14 }}> 
      (ملحوظة: ربما يتاخر التحميل في حالة بطء الانترنت ).
    </Text>
 </View>
</View>
   )
 }
}


// الصفحة الاولي

class _1E extends React.Component {
 //  next line only for navigation title ...

 static navigationOptions = {
   title: '_1E',
   headerTitle:'مقدمة عن صيانة الموبايل',
   headerBackTitle: '_1',  
 };

   
   
   render (){
       return (
<View>  
  
   <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
      <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>الدرس الاول مقدمة عن الصيانة </Text>
   </View>

   <View > 
          <View style={{right:10}}>
             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
                    في ظل التقدم العصري وانتشار التقنية الحديثة 
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
                 نظرا لحاجة الناس الملحة الي الموبايلات 
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             وانتشار التقنية بالشكل الذي سيطر علي الاسواق     
             </Text>
          

           
             <Text style={{ fontSize: 18 ,alignSelf:'center',textAlign: "right"}} >
                 حتي اصبح الموبايل من ضرورات الحياة    
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
                   ونظرا لعدم تقديم التوكيلات لصيانة حقيقة للموبيلات  
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
                    فمن هنا ظهرت مهنة فني الصيانة{'\n'} او فني الصيانة البديلة 
             </Text>

                 <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             الصيانة البديلة : تعني ان تكون قادرا علي اصلاح ما تمتنع عن اصلاحه شركات صيانة المحمول    
                       </Text> 

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             لذلك يتبادر الي الذهن سؤال .
             </Text> 

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             ما هي أدوات الصيانة البديلة؟
             </Text> 
             
             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
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
             onPress = {() => this.props.navigation.navigate('_1QE')}
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


// السؤال الاول.................................................

class _1QE extends React.Component {
 static navigationOptions = {
   title: 'سؤال 1',
   headerBackTitle:'للخلف',
   headerTintColor: 'red'
   
 };

 constructor(props) {
   super(props);
   this.state = { choice1:false,
                  choice2:false,
                  choice3:false,
                  counter1:0
                };
                    }
replayTrue = () => { 
  this.setState({
    counter1 : this.state.counter1 + 1 &&  this.props.navigation.navigate('_2E')
  })
}
conditional=()=>{
    this.state.choice1 == true && this.state.choice2 == false && this.state.choice3 == false
    ? this.replayTrue()
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
           onPress= { ()=> { this.setState({
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

// الصفحة الثانية  .........

class _2E extends React.Component {
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
             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
         رغم توافر كافة  المعلومات لدي شركات الصيانة عن منتجاتها    
         </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}}  >
           ورغم قدرة الشركات علي توفير كافة المعدات اللازمة للصيانة 
            </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
           وكذلك قدرة الشركات علي توفير كافة قطع الغيار   
          </Text>
          

           
             <Text style={{ fontSize: 18 ,alignSelf:'center',textAlign: "right"}} >
         الا ان الشركات تمتنع عن تقديم صيانة كاملة للموبيلات     
             </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
           وتنحصر صيانة الشركات او الوكلاء في تغيير المكونات الخارجية 
           لكنها تمتنع تماما عن تقديم اي اصلاحات في اللوحة الام وتسمى
           (Mother Board)  
            </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
                    كما تسمى ايضا
                    (PCB)
                     وتسمى بين الفنيين بوردة               
                     
             </Text>

                
           
         </View>

         <Button 
             title='الاستمرار' 
             style={styles.buttons}
             onPress = {() => this.props.navigation.navigate('_2QE')}
             />
             
   </View>
   );
 }
}


class _2QE extends React.Component {
 static navigationOptions = {
   title: 'سؤال 2',
   headerBackTitle:null,
   headerTintColor: 'red'
   
 };

 constructor(props) {
   super(props);
   this.state = { choice1:false,choice2:false,choice3:false};
 }

conditional=()=>{
    this.state.choice1 == true && this.state.choice2 == true && this.state.choice3 == true
    ? this.props.navigation.navigate('_3E')
    : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
 render() {
   return (
 <Container>
      {/* <Header /> */}
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

// الصفحة الثالثة ...................................

class _3E extends React.Component {
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
       <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             ما هي أهم الاسباب التي تمنع الشركات من تقديم صيانة حقيقية   
                    </Text> 

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
           1- اسباب اقتصادية :        
             </Text> 

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             - مثل التصنيع اقل تكلفة من الاصلاح
             {'\n'}  
             - دفع المستخدمين الي شراء المنتجات الجديدة 
           </Text> 
             
             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             2- أسباب فنية :
            </Text>

             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
             - عدم القدرة علي تقديم معايير ثابتة لضمان الاجهزة بعد اصلاحها  
            </Text>

            <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow',textAlign: "right"}} >
          الخلاصة: {'\n'}
          اسباب امتناع الشركات عن الصيانة : {'\n'}
          - التصنيع ارخص من الاصلاح {'\n'}
          - لا يمكن تقديم ضمان لما تم اصلاحه {'\n'}
          - تسويق المنتجات الجديدة {'\n'}
          </Text>  

           <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right"}} >
           لكن بالرغم من ذلك 
           {'\n'} اثبتت الصيانة البديلة وجودها ونجاحها في توفير ما امتنعت الشركات عن تقديمه وهو الصيانة الحقيقة للموبيلات           
           </Text>
         </View>
         <Button 
             title='الاستمرار' 
             style={styles.buttons}
             onPress = {() => this.props.navigation.navigate('_3QE')}
             />
     </View>
   );
 }
}

// السوال الثالث 

class _3QE extends React.Component {
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
  E3array[0] = 1
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



const ElectronicesNav3 = 
StackNavigator({
  Electronices3:{screen:Electronices3},
  _1E: {screen :StackNavigator({    
               _1E:{screen:_1E},
               _1QE: {screen :StackNavigator({    
                            _1QE:{screen:_1QE},
                            _2E:{screen:StackNavigator({
                                       _2E:{screen:_2E},
                                       _2QE:{screen:StackNavigator({
                                                   _2QE:{screen:_2QE},
                                                   _3E:{screen:StackNavigator({
                                                              _3E:{screen:_3E},
                                                              _3QE:{screen:_3QE}
                                                   },{
                                                    headerMode: 'none',
                                                    mode: 'modal',
                                                    navigationOptions: {gesturesEnabled: false,}
                                                    })}
                                       },{
                                        headerMode: 'none',
                                        mode: 'modal',
                                        navigationOptions: {gesturesEnabled: false,}
                                        })},
                                                     },{
                                                      headerMode: 'none',
                                                      mode: 'modal',
                                                      navigationOptions: {gesturesEnabled: false,}
                                                      })}
                                          },{
                                            headerMode: 'none',
                                            mode: 'modal',
                                            navigationOptions: {gesturesEnabled: false,}
                                            })}         
                              },{
                                headerMode: 'none',
                                mode: 'modal',
                                navigationOptions: {gesturesEnabled: false}
                              })}
                            },{
                             headerMode: 'none',
                             mode: 'modal',
                             navigationOptions: {gesturesEnabled: false,}
                             });


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
  },
  textTitle:{
    color:'blue',fontWeight:'bold',fontSize: 20 
  },
  text:{ 
    fontSize: 18 
    ,alignSelf:'flex-end'
    ,textAlign: "right"
     },
  textShort:{
     fontSize: 18 
     ,alignSelf:'flex-end'
     ,fontWeight:'bold'
     ,backgroundColor:'yellow'
    },
    imageStyles:{
      // position:'absolute',
      // backgroundColor:'blue',
      // borderRadius:5,
      flexDirection:'row',
      height:300,
      width:400,
      padding:5,
      paddingTop:16,
      bottom :20 ,
      right :10,
      left : 10 ,
      resizeMode:'contain',
      // borderWidth:1,
      // borderColor:'white',
      // borderWidth: 5,
      // borderRadius: 5,
      // flex:2
    }
  
}

export default ElectronicesNav3;

