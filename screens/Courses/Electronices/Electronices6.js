import React from 'react';
import {WebView, View,KeyboardAvoidingView,Text,Button,TouchableOpacity,TextInput,Alert,ScrollView,Image,Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import Itunes from './itunes'
import ImageZoom from 'react-native-image-pan-zoom';

class Electronices6 extends React.Component{
   //  next line only for navigation title ...

   static navigationOptions = {
    title: '_1E',
    headerTitle:'مقدمة عن السوفت وير ',
    headerBackTitle: '_1',  
  };

  render(){
    return(
      <View style={{flexDirection: 'row',justifyContent:'center' }} > 

      <TouchableOpacity 
           onPress = {() => this.props.navigation.navigate('_3QS')} style={styles.buttons}>
           <Entypo  name="help" size={32} color="red" />
      </TouchableOpacity>

      <TouchableOpacity 
           onPress = {() => this.props.navigation.navigate('_3S')} style={styles.buttons}>
          <MaterialCommunityIcons  name="numeric-3-box" size={32} color="black" />
      </TouchableOpacity>

      <TouchableOpacity 
           onPress = {() => this.props.navigation.navigate('_2QS')} style={styles.buttons}>
           <Entypo  name="help" size={32} color="red" />
      </TouchableOpacity>

      <TouchableOpacity 
           onPress = {() => this.props.navigation.navigate('_2S')} style={styles.buttons}>
           <MaterialCommunityIcons  name="numeric-2-box" size={32} color="black" />
      </TouchableOpacity>

      <TouchableOpacity 
           onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
           <Entypo  name="help" size={32} color="red" />
      </TouchableOpacity>

      <TouchableOpacity 
           onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
<MaterialCommunityIcons  name="numeric-1-box" size={32} color="black" />      </TouchableOpacity>

   </View>

    )
  }
}


class _1S extends React.Component {
 

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


// السؤال الاول.......

class _1QS extends React.Component {
  static navigationOptions = {
    title: 'سؤال 1',
    headerBackTitle:null,
    headerTintColor: 'red'
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'مجانية' && this.state.text2 == 'مدفوعة'
     ? this.props.navigation.navigate('_2S')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
     <KeyboardAvoidingView>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end',marginTop:4}} >
            ما هي أنواع البرامج المستخدمة في عمل السوفت وير
        </Text>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
            للمحمول او الجوال ؟ 
        </Text>
          <TextInput
                  style={{height: 40,width:60,fontSize: 22 
                  ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
       <View > 
          <TextInput
                  style={{height: 40,width:60,
                  fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </KeyboardAvoidingView>

      
    );
  }
}



// الصفحة الثانية  .........

class _2S extends React.Component {
  static navigationOptions = {
    title: 'screen 3',
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
      <View>
              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
                  <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }} >       الدرس الثاني برامج السوفت وير المجانية    </Text>
              </View>
              <View>
                  {this.renderDetails2()}
              </View>
              <Button
              onPress={() => this.props.navigation.navigate('_4E')}
              title="الاستمرار"
              />
      </View>
    );
  }
}

//  السؤال الثاني ...............................................

class _2QS extends React.Component {
  static navigationOptions = {
    title: 'سؤال 2',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'Itunes'&& this.state.text2 == 'Smartswitch'
     ? this.props.navigation.navigate('_3S')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
<View>
   <View style={{right:10}}>

        <Text style={{ fontSize: 18 ,alignSelf:'flex-end', marginTop:10}} >
       اختر من الكلمات الاتية ما يناسب الفراغات
        </Text> 
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',marginTop:10}} >
       (Huwaiesuit - Smartswitch - Itunes - Odin )
        </Text>
       
   </View>
       <Text style={{ fontSize: 18 ,alignSelf:'flex-end',marginTop:10}} >
         -  في هذه المرحلة من السوفت 
          نهتم بدراسة برنامج 
        </Text>
          <TextInput
                  style={{height: 40,width:60,
                  fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              وهو البرنامج المستخدم في عمل نسخة احتياطية للايفون
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text> 
              
          </View>
          <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
                  - كما نهتم ايضا بدراسة برنامج
              </Text>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={11}    
            /> 
     </View>
     <Text style={{ fontSize: 16 ,alignSelf:'flex-end',}}  >
         وهو البرنامج المستخدم في عمل نسخة احتياطية للسامسونج   
              </Text>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}

// الصفحة الثالثة

class _3S extends React.Component {
  static navigationOptions = {
    title: 'screen 3',
    headerTintColor: 'green'
  };
  render() {
    return (
      <View>
         <Itunes/>
        <Button
          onPress={() => this.props.navigation.navigate('_4E')}
          title="الاستمرار"
        />
      </View>
    );
  }
}

// ..... السؤال الثالث.....

class _3QS extends React.Component {
  static navigationOptions = {
    title: 'سؤال 3',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional= ()=> {
     this.state.text1 == 'Country'&& this.state.text2 == 'Regions'
     ? this.props.navigation.navigate('_2')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
        من أجل اظهار محتويات اختيار Tv Movies 
        </Text>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
          فاننا نحتاج الي تغيير الدولة من خلال الدخول علي   
          </Text>
          <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold'}} >
            (Country Regions - store - free opisides)
          </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={7}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={7}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



const ElectronicesNav6 = 
StackNavigator({
  Electronices6:{screen:Electronices6},
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
                             }) ;


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

export default ElectronicesNav6;

