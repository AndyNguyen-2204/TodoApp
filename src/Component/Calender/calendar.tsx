import { TypeCalendar } from "./interface"
import { SafeAreaView,StyleSheet,View} from "react-native"
import CalendarPicker from 'react-native-calendar-picker';
const RenderCalendar:React.FC<TypeCalendar>=({
   minDate,
   hideExtraDays,
   showCalendar,
   chooseDate,
   setChooseDate,
})=>{
  const handelChoosenDate=(date:any)=>{
    console.log(date);
    
       setChooseDate(date.dateString)
       showCalendar()
  }
  return(
     <SafeAreaView style={styles.wrapModal}>
      <View style={styles.opacity}></View>
        <View style={{width:"100%",paddingHorizontal:15}}>
        <CalendarPicker style={{width:"100%",elevation:4,borderRadius:10}} onDateChange={(date:any)=>handelChoosenDate(date)}
          initialDate={minDate}
          minDate={minDate}
          hideExtraDays={hideExtraDays}
          markedDates={{
            chooseDate: {
              marked:true,
              dotColor:"black",
              selected:true,
              selectedColor:"#55847A"
            },              
            
          }}
        />
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
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  opacity:{
    height:"100%",
    width:"100%",
    backgroundColor:"#999999",
    opacity:0.4,
    position:"absolute",
    top:0
  },

})
export default RenderCalendar