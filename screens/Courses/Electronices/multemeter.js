import React from 'react';
import { View,Text,ScrollView,Image,Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class multemeter extends React.Component{
    render(){
//       const itunesImage = [
//             require('./softImage/2.jpg'),
// ] 

        return(
            <View>
<ScrollView>
            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>1- شرح تعليمي لجهاز الملتيميتر </Text>
              <ImageZoom 
                          cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={200}
                          >
                    <Image source={require('./electronicesImage/1.jpg')} 
                    style={styles.imageStyles}
                    />
              </ImageZoom>
           </View>

            <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>2- شرح تعليمي لجهاز مليتيمتر YAXUN  </Text>
              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./electronicesImage/2.jpg')} 
                    style={styles.imageStyles}/>
              </ImageZoom>
           </View>

           <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>شرح تعليمي لجهاز ملتيميتر  </Text>
              <Text  style={{color:'black',fontWeight:'bold',fontSize: 16 }}>من انتاج شركة SunShine </Text>

              <ImageZoom cropWidth={Dimensions.get('window').width}
                          cropHeight={Dimensions.get('window').height-400}
                          imageWidth={400}
                          imageHeight={300}
                          >
                    <Image source={require('./electronicesImage/3.jpg')} 
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

         export default multemeter ;