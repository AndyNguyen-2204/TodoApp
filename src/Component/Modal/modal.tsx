import {ModalType} from "./interface"
import { SafeAreaView,View,Text, StyleSheet } from "react-native"
const Modal:React.FC<ModalType>=({

})=>{
  return(
     <SafeAreaView style={styles.wrapModal}>
      <View style={styles.opacity}></View>
      <View style={styles.wrapContentModal}>
        <Text>fhjfhdjfhdjfhdj</Text>
      </View>
     </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapModal:{
    height:"100%",
    width:"100%",
    zIndex:6,
    position:"absolute",
    top:0,
  },
  opacity:{
    height:"100%",
    width:"100%",
    backgroundColor:"#999999",
    opacity:0.4
  },
  wrapContentModal:{
    width:"90%",
    alignSelf:"center",
    paddingHorizontal:15,
    backgroundColor:"#777777",
    position:"absolute"
  }
})
export default Modal