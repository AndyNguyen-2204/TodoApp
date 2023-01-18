import { StyleSheet } from "react-native"
export const styles=StyleSheet.create({
  wrapWelcome:{
    height:"100%",
    width:"100%",
    backgroundColor:"#ECF1F4",
    position:'relative',
    paddingHorizontal:16 
  },
  circel:{
    backgroundColor:"#4B4DED",
    width: 667,
    height: 667,
    left: -198,
    top: -319,
    borderRadius:360,
    position:"absolute",
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  image:{
    zIndex:2,
    marginTop: 92,
    alignSelf: 'center'
    
  },
  wrapcontent:{
    marginTop:30,
  },
  content:{
    fontFamily: 'Work Sans',
    fontStyle:"normal",
    fontWeight:"700",
    fontSize:40,
    lineHeight:47,
    textAlign:"center",
    letterSpacing:-0.2,
    color:"#0E0E2C"
  },
  description:{
    fontFamily:'Work Sans',
    fontStyle:"normal",
    fontWeight:"500",
    fontSize:22,
    lineHeight:32,
    textAlign:"center",
    letterSpacing:-0.2,
    color:"#8C8CA1",
    marginTop:20
    },
  buttonGetStart:{
    height:55,
    width:183,
    backgroundColor:"#4B4DED",
    borderRadius:10,
    flexDirection:"column",
    justifyContent:"center",
    margin:"auto",
    alignSelf:"center",
    marginTop:30
  },
  textbuttonGetStart:{
    fontFamily:'Work Sans',
    fontStyle:"normal",
    fontWeight:"700",
    fontSize:18,
    lineHeight:22,
    textAlign:"center",
    letterSpacing:-0.3,
    color:"#ffffff"
  }
})