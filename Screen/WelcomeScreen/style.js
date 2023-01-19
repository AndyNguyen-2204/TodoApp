import { StyleSheet } from "react-native"
export const styles=StyleSheet.create({
  wrapWelcome:{
    height:"100%",
    width:"100%",
    backgroundColor:"#F5F5F5",
    position:'relative',
    paddingHorizontal:16 
  },
  circel:{
    position:"absolute",
    width: 291,
    height: 244.76,
    left: -107,
    top: -122,
    
  },
  wrapcontent:{
    marginTop:30,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
    
  },
  imgMan:{
     marginTop:60
  },
  content:{
    fontFamily: 'Poppins',
    fontStyle:"normal",
    fontWeight:"700",
    fontSize:25,
    lineHeight:30,
    textAlign:"center",
    color:"#000000",
    marginTop:43
  },
  description:{
    fontFamily:'Poppins',
    fontStyle:"normal",
    fontWeight:"500",
    fontSize:18,
    lineHeight:20,
    textAlign:"center",
    color:"#000000",
    marginTop:18
    },
  buttonGetStart:{
    backgroundColor:"#55847A",
     paddingHorizontal:60,
     paddingVertical:15,
    margin:"auto",
    alignSelf:"center",
    marginTop:56,
    borderRadius:5
  },
  textbuttonGetStart:{
    fontFamily:'Poppins',
    fontStyle:"normal",
    fontWeight:"500",
    fontSize:18,
    lineHeight:22,
    textAlign:"center",
    color:"#ffffff"
  }
})