import { StyleSheet } from 'react-native';


export const styles=StyleSheet.create({
  wrapHomeScreen:{
    height:"100%",
    width:"100%",
    backgroundColor:"#F5F5F5",
    paddingHorizontal:16,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  wrapAllcontent:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10,
    justifyContent:"center",
    alignItems:"center"
  },
  wrapbox:{
    height:150,
    width:150,
    borderRadius:100,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderWidth:0.7,
    },
  firstBox:{
    backgroundColor:"#ff0000"
  },
  secondBox:{
    backgroundColor:"#ff4500"
  },
  thirdBox:{
    backgroundColor:"#ffff00"
  },
  fourthBox:{
    backgroundColor:"#9acd32"
  },
  content:{
    fontFamily: 'Work Sans',
    fontSize:14,
    fontWeight:"700",
    textAlign:"center"
  },
  number:{
    fontSize:20,
    marginTop:5
  },
  button:{
    backgroundColor:"#55847A",
    borderRadius:5,
    flexDirection:"column",
    justifyContent:"center",
    margin:"auto",
    alignSelf:"center",
    marginTop:40,
    paddingHorizontal:40,
    paddingVertical:15,
  },
  lableButton:{
    fontFamily:'Poppins',
    fontStyle:"normal",
    fontWeight:"500",
    fontSize:18,
    lineHeight:22,
    textAlign:"center",
    color:"#ffffff"
  }

})