import {  Dimensions ,ImageBackground,Platform} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default {
        slideStyle: {
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          width: SCREEN_WIDTH,
        },
        imageBackground:{
          position:'absolute',
          backgroundColor:'blue',
          borderRadius:5,
          flexDirection:'row',
          height:330,
          padding:5,
          paddingTop:16,
          bottom :20 ,
          right :10,
          left : 10 ,
          borderWidth:1,
          borderColor:'white',
          borderWidth: 5,
          borderRadius: 5,
          flex:2
       },
       imageLogo:{
        // position: "absolute",
        // left: Platform.OS === "android" ? 40 : 50,
        // top: Platform.OS === "android" ? 35 : 60,
        width: 400,
        height: 100,
        flex:1,
        // marginVertical: 5,
        alignSelf: "center",
      
       },
      
        textStyle: {
          fontSize: 28,
          color: 'white',
          justifyContent: 'center',
          alignSelf:'center',
          // alignItems:"center",
          // bottom :-15 ,
          flex: 3
      
        },
        buttonStyle: {
          backgroundColor: "red",
          alignSelf: "center"
          // backgroundColor: 'green',
          // justifyContent: 'center',
          // alignItems: 'center',
          // padding:10,
          // marginBottom:3,
          // borderRadius:0,
          // shadowColor:'blue',
          // shadowOffset:{width: 0, height: 5},
          // shadowOpacity:0.35,
        
        },
      
    
};