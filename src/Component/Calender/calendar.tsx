import { TypeCalendar } from "./interface"
import { SafeAreaView, StyleSheet, View } from "react-native"
import CalendarPicker from 'react-native-calendar-picker';
import moment from "moment";
const RenderCalendar: React.FC<TypeCalendar> = ({
  minDate,
  showCalendar,
  chooseDate,
  setChooseDate,
}) => {
  const handelChoosenDate = (date: any) => {
    setChooseDate(date.toString())
    showCalendar()
  }

  return (
    <SafeAreaView style={styles.wrapModal}>
      <View style={styles.opacity}></View>
      <View style={{ width: "95%", paddingHorizontal: 15, backgroundColor: "#9C9C9C" }}>
        <CalendarPicker
          onDateChange={(date: any) => handelChoosenDate(date)}
          minDate={minDate}
          startFromMonday={true}
          allowRangeSelection={false}
          todayBackgroundColor="#3399FF"
          selectedDayColor="#33CC66"
          selectedDayTextColor="#FFFFFF"
          maxRangeDuration={0}
          minRangeDuration={0}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapModal: {
    height: "100%",
    width: "100%",
    zIndex: 6,
    position: "absolute",
    top: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  opacity: {
    height: "100%",
    width: "100%",
    backgroundColor: "#999999",
    opacity: 0.4,
    position: "absolute",
    top: 0
  },

})
export default RenderCalendar