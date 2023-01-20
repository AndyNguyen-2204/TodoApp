import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native"
import React, { useState } from 'react'
import ImageBackgroundScreen from "../../src/Component/BackgroundScreen"
import Input from "../../src/Component/Input/input"
import Dropdown from '../../src/Component/Dropdown/dropDown';
import { styles } from "./styles"
import { data } from "./dataStatusTodo"
import Button from "../../src/Component/Button/button";
function TodoAdd(): JSX.Element {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("")
  const [valueInput, setValueInput] = useState("")
  const clearState = () => {
    setValueInput("")
    setValue(0)
    setName("")
  }
  return (
    <SafeAreaView style={styles.wrapAddScreen}>
      <ImageBackgroundScreen />
      <View>
        <Image style={styles.image} source={require("../../Asset/Images/imgAddScr.png")} />
        <Input placeholder="Nhập công việc mới" classesInput={styles.textInput} value={valueInput} onChange={setValueInput}></Input>
        <Dropdown label="Chọn trạng thái công việc" data={data} value={value} setName={setName} name={name} setValue={setValue} classDropdown={styles.dropdown} classWrapvalueDropdown={styles.wrapValueDropdown} />
      </View>
      <View style={styles.wrapButton}>
        <Button title="Lưu" classesButton={styles.buttonSave} classLable={styles.labelbtnSave} />
        <Button title="Clear" classesButton={styles.buttonClear} classLable={styles.labelbtnClear} onpress={clearState} />
      </View>
    </SafeAreaView>
  )
}
export default TodoAdd