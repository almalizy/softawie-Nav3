import React from 'react';
import { View,Text,ScrollView,Image,Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class Itunes extends React.Component{
    render(){
//       const itunesImage = [
//             require('./softImage/2.jpg'),
// ] 

        return(
            <View>
<ScrollView>
            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>1- فتح برنامج ايتيونز كما بالصورة </Text>
              <ImageZoom 
                          cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={200}
                          >
                    <Image source={require('./softImage/1.jpg')} 
                    style={styles.imageStyles}
                    />
              </ImageZoom>
           </View>

            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>2- الدخول علي اختيار TV movies  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/2.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

           <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>3- الدخول علي اختيار TV movies  </Text>
              <Text  style={{color:'black',fontWeight:'bold',fontSize: 16 }}>لكن اذا كانت الدولة المختارة السعودية نلاحظ 
              عدم اتاحة تحميل الفيديوهات 
             المطلوبة فهنا نضطر الي تغييير الدولة بالخطوات التالية  </Text>

              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/3.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>4- الرجوع مرة اخرى الي اختيار  store and (music) </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/4.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>5- الدخول الي اختيار store  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/5.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>6- تغيير الدولة من اختيار country reigons  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/6.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>7- اختيار دولة اخرى مثل  United State  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/7.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>8- اختيار  Tv Shows مرة اخرى ولاحظ الفرق </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/8.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>9- اختيار Free Tv Episodes وهي حلقات التلفاز المجانية </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/9.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>10 - اختيار اي حلقات من المعروضة امامك  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/10.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>11- البحث عن اي فيديو لا يحتوي سعر اي مجاني وتجد مكتوب عليه Get  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/11.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>12- Creat New Apple Id اختيار من النافذة المنبثقة  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/12.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

              <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>13- اكمال خطوات انشاء الحساب مع اختيار خانة عدم وجود فيزا Noun  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./softImage/13.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

         </ScrollView>
         </View>
            
        );
    }
}

const styles = {
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

   {/* <WebView
         source={{uri: 'http://www.softawie.com/'}}
         style={{marginTop: 20}}
        /> */}

         export default Itunes ;