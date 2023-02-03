import React, { useMemo } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import { styles } from "./styles"
import Button from '../../src/Component/Button/button'
import { TypeHomeScreen } from "./interface"
import Icon from 'react-native-vector-icons/FontAwesome'
import { dataFilter } from "../TodoAddnew/dataStatusTodo"
import BlockTaskk from '../../src/Component/BlockTask/blockTask'
import { renderColorBlock } from "./helperFunction"
import { useSelector, useDispatch } from 'react-redux'
import { filterBLock } from "../../Redux/FilterBlockSlice/filterBlock"
import moment from 'moment'
const Home: React.FC<TypeHomeScreen> = ({
  navigation
}) => {
  const listTodoSlice = useSelector((state: any) => state.TodoList.data)
  const dispatch = useDispatch()
  const today = new Date();
  const tomorrow = new Date().setDate(new Date().getDate() + 1)
  const handelFilterBlock = (name: string, value: number) => {
    dispatch(filterBLock({
      name,
      value
    }))
    navigation.navigate("ListTodo")
  }
  const renderBlockTask = useMemo(() => {
    return (
      dataFilter.map((el: any, index: number) =>
        <BlockTaskk key={index} title={el.name} quantity={renderQuantityTypeTask(el.value)} styleBLock={renderColorBlock(el.value)} onpress={handelFilterBlock} value={el.value} />
      )
    )
  }, [listTodoSlice])
  function renderQuantityTypeTask(numberType: number) {
    if (numberType === 1) {
      return listTodoSlice.filter((e: any) => e.value === 1 && e.status === "Processing").length
    } else if (numberType === 2) {
      return listTodoSlice.filter((e: any) => e.value === 2 && e.status === "Processing").length
    } else if (numberType === 3) {
      return listTodoSlice.filter((e: any) => e.value === 3 && e.status === "Processing").length
    } else if (numberType === 4) {
      return listTodoSlice.filter((e: any) => e.value === 4 && e.status === "Processing").length
    } else if (numberType === 5) {
      return listTodoSlice.filter((e: any) => e.status === "Completed").length
    } else if (numberType === 6) {
      return listTodoSlice.length
    } else if (numberType === 7) {
      return listTodoSlice.filter((e: any) => e.date === moment(today.toString()).format("DD-MM-YYYY")).length
    } else if (numberType === 8) {
      return listTodoSlice.filter((e: any) => e.date === moment(tomorrow).format("DD-MM-YYYY")).length
    }
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.wrapHomeScreen}>
       <View style={styles.wrapAllcontent}>
          {renderBlockTask}
        </View>
        <Button title='Thêm công việc mới' classesButton={styles.button} classLable={styles.lableButton} onpress={() => { navigation.navigate("Add new") }} icon={<Icon name='plus' size={15} color="#ffffff" />} />
    </SafeAreaView>
    </ScrollView>
  )
}

export default Home
