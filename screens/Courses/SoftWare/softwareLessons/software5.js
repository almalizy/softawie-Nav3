import React from 'react';
import {WebView, View,KeyboardAvoidingView,Button,TouchableOpacity,TextInput,Alert,ScrollView,Image,Dimensions} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';

import { StackNavigator } from 'react-navigation';
import { Entypo ,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import axios from 'axios';

class software1 extends React.Component{
   //  next line only for navigation title ...

   static navigationOptions = ({ navigation }) => { 
    return {
  title: 'مقدمة عن السوفت وير',
  headerLeft : (<TouchableOpacity 
                  onPress={() => navigation.navigate('software')} 
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
                onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
                <Text style={styles.textTitle}>  </Text>
                <Text style={styles.text}> سؤال 1 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity title='test ' 
                  onPress = {() => this.props.navigation.navigate('_1S')} style={styles.buttons}>
                  <Text style={styles.textTitle}>  </Text>
                  <Text style={styles.text}>  درس 1 مقدمة عن الصيانة  </Text>
                  </TouchableOpacity>
                
          </View>

          <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test '
                 onPress = {() => this.props.navigation.navigate('_2QS')} style={styles.buttons}>
                  <Text style={styles.text}>  سؤال 2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity title='test '
                   disabled ={counter=1 ? false : true}
                   onPress = {() => this.props.navigation.navigate('_2S')} 
                   style={styles.buttons}>
                  <Text style={styles.text}>   امتناع الشركات عن الصيانة  </Text>
                  </TouchableOpacity>
          </View>

          <View  style={styles.buttonCOntainer}> 
                <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3S')} style={styles.buttons}>
                <Text style={styles.text}> ? </Text>
                <Text style={styles.text}>سؤال 3 </Text>
                  </TouchableOpacity>
                  <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3QS')} style={styles.buttons}>
                  <Text style={styles.text}> اسباب امتناع الشركات عن الصيانة </Text>
                  </TouchableOpacity>
          </View>
          

 
      
      </View>
            );
          }
        }


// الصفحة الاولي

class _1S extends React.Component {
  //  next line only for navigation title ...
  static navigationOptions = ({ navigation }) => { 
    return {
  title: ' درس 1',
  headerLeft : (<TouchableOpacity 
                  onPress={() => navigation.navigate('software1')} 
                  >
                  <Text>للخلف </Text>
                  <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                 </TouchableOpacity>)
  ,headerStyle: { backgroundColor: '#f4511e' }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
  }; 
};

state = {details:[]};

componentWillMount() {
  axios.get('https://software-api.herokuapp.com/')
    .then(response => this.setState({ details: response.data }));
}

renderDetails() {

  return this.state.details.map(detail =>
    <Text key={detail.id} style={styles.text}>
    {detail.text}
    </Text>
  );
}

  render (){
      return (
<View> 
       
 

  <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
        <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>الدرس الاول مقدمة عن السوفت وير </Text>
  </View>
        <Text  style={{color:'blue',fontWeight:'bold',fontSize: 14 }}> 
          (ملحوظة: ربما يتاخر التحميل في حالة بطء الانترنت ).
        </Text>
  <View> 
  {this.renderDetails()}
  </View>

  <View > 
         <View style={{right:10}}>
           <Text style={styles.textShort} > الخلاصة...
           </Text>  
         </View>

        <Button 
            title='الاستمرار' 
            style={styles.buttons}
            onPress = {() => this.props.navigation.navigate('_1QS')}
            />   
  </View>

  

  
</View>

      );
  }
}
// السؤال الاول.................................................

class _1QS extends React.Component {
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
     this.state.choice1 == true && this.state.choice2 == true && this.state.choice3 == true && this.state.choice4 == true
     ? this.props.navigation.navigate('_2E') && this.setState({counter:counter+1})
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
  <Container>
       {/* <Header /> */}
       <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right",margin:10}}>
          ما هي أدوات السوفت وير ؟؟
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
              <Text>جهاز الكمبيوتر</Text>
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
              <Text>كابل اليواس بي المناسب للموبايل</Text>
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
              <Text>ملفات السوفت وير المناسبة للموبايل</Text>
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
              <Text>برنامج عمل السوفت وير</Text>
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

class _2S extends React.Component {
  static navigationOptions = {
    title: 'الدرس الثاني',
    headerTintColor: 'green'
  };

  state = {details2:[]};

  componentWillMount() {
    axios.get('https://software-api.herokuapp.com/_2S')
      .then(response => this.setState({ details2: response.data }));
  }
  
  renderDetails2() {
    return this.state.details2.map(detail =>
              <Text key={detail.id} style={styles.text}>{detail.text2}</Text>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView>
              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
                  <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }} >       الدرس الثاني برامج السوفت وير المجانية    </Text>
              </View>
              <View>
                  {this.renderDetails2()}
              </View>
              <Button
              onPress={() => this.props.navigation.navigate('_2QS')}
              title="الاستمرار"
              />
      </KeyboardAvoidingView>
    );
  }
}


class _2QS extends React.Component {
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
     this.state.choice1 == flase && this.state.choice2 == true && this.state.choice3 == false
     ? this.props.navigation.navigate('_3E')  && this.setState({counter:counter+1})
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
  <Container>
       {/* <Header /> */}
       <Text style={{ fontSize: 18 ,alignSelf:'flex-end',textAlign: "right",margin:10}}>
        برنامج يستخدم في حسب بيانات العميل لجوالات الايفون
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
              <Text>HtcSync</Text>
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
              <Text>itunes</Text>
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
              <Text>SmartSwitch</Text>
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

class _3S extends React.Component {
  static navigationOptions = {
    title: 'الدرس الثالث',
    headerTintColor: 'blue'
  };

  state = {details3:[]};

  componentWillMount() {
    axios.get('https://software-api.herokuapp.com/_3S')
      .then(response => this.setState({ details3: response.data }));
  }
  
  renderDetails3() {
    return this.state.details3.map(detail =>
              <Text key={detail.id} style={styles.text}>
              {detail.text3}
              </Text>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView>
              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
                  <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }} >       الدرس الثالث برامج السوفت وير المجانية    </Text>
              </View>
              <View>
                  {this.renderDetails3()}
              </View>
              <Button
              onPress={() => this.props.navigation.navigate('_3QS')}
              title="الاستمرار"
              />
      </KeyboardAvoidingView>
    );
  }
}

// السوال الثالث 

class _3QS extends React.Component {
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
يستخدم برنامج الايتيونز في      </Text>

       <Content >

          <ListItem style={{ alignSelf:'flex-start',marginTop:20}}>
            <CheckBox 
               checked={this.state.choice1} 
            onPress= { ()=> { this.setState({
              choice1:!this.state.choice1
            })
            }} />
            <Body>
              <Text>عمل نسخة احتياطية لبيانات العميل</Text>
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
              <Text>عمل حساب ابل ستور مجاني</Text>
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
              <Text>عمل سوفت وير بمسح او بدون مسح لموبايل الايفون</Text>
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




const SoftNav1 = 
StackNavigator({
  software1:{screen:software1},
  _1S: {screen :StackNavigator({    
               _1S:{screen:_1S},
               _1QS: {screen :StackNavigator({    
                            _1QS:{screen:_1QS},
                            _2S:{screen:StackNavigator({
                                       _2S:{screen:_2S},
                                       _2QS:{screen:StackNavigator({
                                                   _2QS:{screen:_2QS},
                                                   _3S:{screen:StackNavigator({
                                                              _3S:{screen:_3S},
                                                              _3QS:{screen:_3QS}
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

export default SoftNav1;

