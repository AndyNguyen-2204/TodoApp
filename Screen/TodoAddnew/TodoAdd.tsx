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
import moment from "moment";
const TodoAdd: React.FC<TodoAddType> = ({
  navigation
}) => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("")
  const [valueInput, setValueInput] = useState("")
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState<Boolean>(false)
  const today = new Date();
  const [showCalendar, setShowCalendar] = useState<Boolean>(false)
  const [chooseDate, setChooseDate] = useState<string>("")
  const clearState = () => {
    setValueInput("")
    setValue(0)
    setName("")
    setChooseDate("")
  }
  const handelCloseModal = () => {
    setShowModal(false)
  }
  const addNewTodo = () => {
    if (name !== "" && value !== 0 && chooseDate !== "") {
      dispatch(addTodo({
        name: valueInput,
        value,
        status: "Processing",
        date: moment(chooseDate.toString()).format("DD-MM-YYYY")
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
        <TouchableOpacity style={styles.wrapBtnChooseDate} onPress={() => setShowCalendar(true)}>
          <Text style={styles.contentbtnDate}>
            {chooseDate !== "" ? moment(chooseDate.toString()).format("DD-MM-YYYY") : "Chọn ngày thực hiện công việc"}
          </Text>
          <Icon name='calendar' size={15} color="#000000" />
        </TouchableOpacity>
        <View style={styles.wrapButton}>
          <Button title="Lưu" classesButton={styles.buttonSave} classLable={styles.labelbtnSave} onpress={addNewTodo} />
          <Button title="Clear" classesButton={styles.buttonClear} classLable={styles.labelbtnClear} onpress={clearState} />
        </View>
      </SafeAreaView>
      {showModal && <Modal description="Vui lòng nhập công việc , chọn trạng thái công việc và ngày thực hiện công việc" title="Notification" type="modalNoti" handelOk={handelCloseModal} />}
      {showCalendar ? <RenderCalendar minDate={today} setChooseDate={setChooseDate} showCalendar={handelCloseCalendar} chooseDate={chooseDate} /> : ""}
    </>
  )
}
export default TodoAdd