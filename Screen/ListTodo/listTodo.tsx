import { ListTodos } from "./interface"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native"
import Dropdown from "../../src/Component/Dropdown/dropDown"
import { data } from "../TodoAddnew/dataStatusTodo"
import { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import { styles } from "./style"
const ListTodo: React.FC<ListTodos> = ({

}) => {
  const listTodo = useSelector((state: any) => state.TodoList.data)
  const [checkboxTodo, setCheckboxTodo] = useState<string[]>([])

  const handleCheckTodo = (e: any) => {
    if (checkboxTodo.includes(e.name as never)) {
      setCheckboxTodo(checkboxTodo.filter((el: any) => el !== e.name))
    } else {
      setCheckboxTodo([...checkboxTodo, e.name])
    }
  }
  const renderTodo = useMemo(() => {
    if (listTodo.length > 0) {
      return (
        listTodo.map((e: any, index: number) =>
          <View key={index} style={styles.wrapTodoinner}>
            <TouchableOpacity onPress={() => handleCheckTodo(e)} style={styles.checkbox}>
              <Text style={styles.checked}>{checkboxTodo.includes(e.name) ? "X" : ""}</Text>
            </TouchableOpacity>
            <View style={styles.wrapContent}>
              <Text style={styles.nameTodo}>
                Công việc : {e.name}
              </Text>
              <Text style={styles.nameTodo}>
                Trạng thái : Khẩn cấp nhưng không quan trọng
              </Text>
            </View>
          </View>
        )
      )
    } else {
      return null
    }
  }, [listTodo, checkboxTodo])
  return (
    <SafeAreaView style={styles.wrapListTodoScreen}>
      <Text style={styles.titleScreen}>Danh sách công việc cần làm</Text>
      <View >
        <View style={styles.wrapTodo}>
          {renderTodo}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ListTodo