import { Image, SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native"
import React, { useState } from 'react'
import ImageBackgroundScreen from "../../src/Component/BackgroundScreen"
import Input from "../../src/Component/Input/input"
import Dropdown from '../../src/Component/Dropdown/dropDown';
import { styles } from "./styles"
import { data } from "./dataStatusTodo"
import Button from "../../src/Component/Button/button";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../Redux/ListTodoSlice/listTodo'
import { TodoAddType } from "./interface"
import Modal from '../../src/Component/Modal/modal';
import RenderCalendar from '../../src/Component/Calender/calendar';
import Icon from 'react-native-vector-icons/FontAwesome'
const TodoAdd: React.FC<TodoAddType> = ({
  navigation
}) => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("")
  const [valueInput, setValueInput] = useState("")
  const dispatch = useDispatch()
  const[showModal,setShowModal]=useState<Boolean>(false)
  var presentDate:any = new Date();
  const getNowDate =`${presentDate.getFullYear()}-${presentDate.getMonth()+1}-${presentDate.getDate()}`
  const [showCalendar,setShowCalendar]=useState<Boolean>(false)
  const [chooseDate,setChooseDate]=useState<string>("")
  const clearState = () => {
    setValueInput("")
    setValue(0)
    setName("")
  }
  const handelCloseModal =()=>{
      setShowModal(false)
  }
  const addNewTodo = () => {
    if (name !== "" && value !== 0) {
      dispatch(addTodo({
        name: valueInput,
        value,
        status:"Processing"
      }))
      navigation.navigate("ListTodo")
      clearState()
    } else {
      setShowModal(true)
    }
  }
  const handelCloseCalendar = () => {
    setShowCalendar(false)
  }
  return (
    <>
    <SafeAreaView style={styles.wrapAddScreen}>
      <ImageBackgroundScreen />
      <View>
        <Image style={styles.image} source={require("../../Asset/Images/imgAddScr.png")} />
        <Input placeholder="Nhập công việc mới" classesInput={styles.textInput} value={valueInput} onChange={setValueInput}></Input>
        <Dropdown label="Chọn trạng thái công việc" data={data} value={value} setName={setName} name={name} setValue={setValue} classDropdown={styles.dropdown} classWrapvalueDropdown={styles.wrapValueDropdown} />
      </View>
      <TouchableOpacity style={styles.wrapBtnChooseDate} onPress={()=>setShowCalendar(true)}>
        <Text style={styles.contentbtnDate}>
         {chooseDate !== "" ? chooseDate :"Chọn ngày thực hiện công việc"}
        </Text>
        <Icon name='calendar' size={15} color="#000000"/>
      </TouchableOpacity>
      <View style={styles.wrapButton}>
        <Button title="Lưu" classesButton={styles.buttonSave} classLable={styles.labelbtnSave} onpress={addNewTodo} />
        <Button title="Clear" classesButton={styles.buttonClear} classLable={styles.labelbtnClear} onpress={clearState} />
      </View>
    </SafeAreaView>
    {showModal && <Modal description="Vui lòng nhập công việc và chọn trạng thái công việc" title="Notification" type="modalNoti" handelOk={handelCloseModal}/>}
    {showCalendar?<RenderCalendar minDate={getNowDate} hideExtraDays={true} setChooseDate={setChooseDate} showCalendar={handelCloseCalendar} chooseDate={chooseDate}/>:""}
    </>
  )
}
export default TodoAdd