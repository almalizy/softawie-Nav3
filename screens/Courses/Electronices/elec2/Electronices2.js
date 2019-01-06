import React from 'react';
import {WebView, View,KeyboardAvoidingView,Button,TouchableOpacity,TextInput,Alert,ScrollView,Image,Dimensions} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';

import { StackNavigator } from 'react-navigation';
import { Entypo ,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import axios from 'axios';

class Electronices2 extends React.Component{
   //  next line only for navigation title ...

   static navigationOptions = ({ navigation }) => { 
    return {
  title: 'الباب الثاني العدد والادوات',
  headerLeft : (<TouchableOpacity 
                  onPress={() => navigation.navigate('Electronices')} 
                  >
                  <Text>للخلف </Text>
                  <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                 </TouchableOpacity>)
  ,headerStyle: { backgroundColor: '#f4511e' }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
  }; 
};

  render(){

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    
    return(
      <View >
      <View></View>
             <View >
              <TouchableOpacity  style={styles.container}
                  onPress={() => this.props.navigation.navigate('DrawerOpen')} >
                 <Ionicons name="md-apps" size={42} color="#e67e22" />
              </TouchableOpacity>
              </View>
      
            <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test ' 
                onPress = {() => this.props.navigation.navigate('_1QE')} style={styles.buttons}>
                <Text style={styles.textTitle}>  </Text>
                <Text style={styles.text}> سؤال 1 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity title='test ' 
                  onPress = {() => this.props.navigation.navigate('_1E')} style={styles.buttons}>
                  <Text style={styles.textTitle}>  </Text>
                  <Text style={styles.text}>  درس 1 مقدمة عن الصيانة  </Text>
                  </TouchableOpacity>
                
          </View>

          <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2QE')} style={styles.buttons}>
                  <Text style={styles.text}>  سؤال 2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity title='test '
                   disabled ={counter=1 ? false : true}
                   onPress = {() => this.props.navigation.navigate('_2E')} 
                   style={styles.buttons}>
                  <Text style={styles.text}>   امتناع الشركات عن الصيانة  </Text>
                  </TouchableOpacity>
          </View>

          <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3E')} style={styles.buttons}>
                <Text style={styles.text}> ? </Text>
                <Text style={styles.text}>سؤال 3 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3QE')} style={styles.buttons}>
                  <Text style={styles.text}> اسباب امتناع الشركات عن الصيانة </Text>
                  </TouchableOpacity>
          </View>
          

 
      
      </View>
            );
          }
        }


// الصفحة الاولي

class _1E extends React.Component {
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
    this.state = { choice1:false,choice2:false,choice3:false,
                   counter:0}
                   ;
  }

conditional=()=>{
     this.state.choice1 == true && this.state.choice2 == false && this.state.choice3 == false
     ? this.props.navigation.navigate('_2E') && this.setState({counter:counter+1})
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
     ? this.props.navigation.navigate('_3E')  && this.setState({counter:counter+1})
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




const Electronicesnav2 = 
StackNavigator({
  Electronices2:{screen:Electronices2},
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
                             }) 


                             const styles = {
                              icon:{
                                width: 24,
                                height: 24,
                              },
                              touchable:{
                                minWidth: 60
                             },
                              container:{
                                // flex:1,
                                alignItems:'flex-end',
                                justifyContent:'flex-start',
                                // paddingTop:60,
                                padding:20
                          
                              },
                              buttons:{
                              width: 150,
                              height: 100,
                              borderColor: "transparent",
                              borderWidth: 0,
                              borderRadius: 5,
                              alignItems: 'center',
                              justifyContent:'center' ,
                              backgroundColor: '#36f',
                              padding: 10,
                              margin:5,
                              marginTop:5,
                              },
                              buttonCOntainer:{
                                justifyContent:'center' ,
                                alignItems: 'center',
                                margin:30 ,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            },
                            textTitle:{
                              color:'white',
                              fontSize: 20,
                              fontWeight: 'bold',
                              justifyContent:'center' ,
                              alignItems: 'center',
                              textAlign: "center"
                            },
                            text:{
                              color:'white',
                              fontSize: 15,
                              fontWeight: 'bold',
                              justifyContent:'center' ,
                              alignItems: 'center',
                          
                            }
                          }

export default Electronicesnav2;

