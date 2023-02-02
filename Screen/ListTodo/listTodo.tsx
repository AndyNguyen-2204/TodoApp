import { ListTodos } from "./interface"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import Dropdown from "../../src/Component/Dropdown/dropDown"
import { dataFilter } from "../TodoAddnew/dataStatusTodo"
import { useState, useMemo, useLayoutEffect, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { styles } from "./style"
import {renderStatusTodo,renderColorStatus} from "./helperFunction"
import { Searchbar } from 'react-native-paper';
import Button from "../../src/Component/Button/button"
import { completedTodo,deleteTodo } from "../../Redux/ListTodoSlice/listTodo"
import ImageBackgroundScreen from "../../src/Component/BackgroundScreen"
import  Icon  from "react-native-vector-icons/FontAwesome"
import Modal from "../../src/Component/Modal/modal"
import Input from '../../src/Component/Input/input';
const ListTodo: React.FC<ListTodos> = ({
  navigation
}) => {
  const listTodoSlice = useSelector((state: any) => state.TodoList.data)
  const filterBlockSlice = useSelector((state:any) => state.FilterBlock.filterBlock)
  const dispatch = useDispatch()
  const [checkboxTodo, setCheckboxTodo] = useState<string[]>([])
  const [searchvalue, setSearchValue] = useState<string>('');
  const [value, setValue] = useState(0);
  const [name, setName] = useState("")
  const [listTodo,setListTodo]=useState<any>()
  const[showModalDelete,setShowModalDelete]=useState<Boolean>(false)
  const[showModalNotiChooseTask,setModalNotiChooseTask]=useState<Boolean>(false)
  const[showModalCompleted,setShowModalCompleted]=useState<Boolean>(false)
  const handleCheckTodo = (e: any) => {
    if (checkboxTodo.includes(e.name as never)) {
      setCheckboxTodo(checkboxTodo.filter((el: any) => el !== e.name))
    } else {
      setCheckboxTodo([...checkboxTodo, e.name])
    }
  }
  const handelCompletedTodo=()=>{
    dispatch(completedTodo(checkboxTodo))
    setCheckboxTodo([])
    setShowModalCompleted(false)
  }
  const handelDeleteTodo=()=>{
    dispatch(deleteTodo(checkboxTodo))
    setCheckboxTodo([])
    setShowModalDelete(false)
  }
  const handelCloseModalDele = () =>{
    setShowModalDelete(false)
  }
  const handelCloseModalNotiChooseTask= () =>{
    setModalNotiChooseTask(false)
  }
  const handelCloseModalCompleted= () =>{
    setShowModalCompleted(false)
  }
  const handelActionDelete=()=>{
    if(checkboxTodo.length===0){
      setModalNotiChooseTask(true)
    }else{
      setShowModalDelete(true)
    }
  }
  const handelActionCompleted=()=>{
    if(checkboxTodo.length===0){
      setModalNotiChooseTask(true)
    }else{
      setShowModalCompleted(true)
    }
  }

  const renderTodo = useMemo(() => {
    if (listTodo?.length > 0) {
      return (
        listTodo.map((e: any, index: number) =>
          <View key={index} style={styles.wrapTodoinner}>
            <TouchableOpacity onPress={() => handleCheckTodo(e)} style={styles.checkbox}>
              <Text style={styles.checked}>{checkboxTodo.includes(e.name) ? <Icon name='check' size={17} color="#ffffff"/> : ""}</Text>
            </TouchableOpacity>
            <View style={styles.wrapContent}>
              <Text style={styles.nameTodo}>
                Công việc : {e.name}
              </Text>
              <Text style={styles.nameTodo}>
                Trạng thái : <Text style={e.status==="Completed"?styles.type5:renderColorStatus(e.value)}>
                  {e.status === "Completed" ? "Hoàn thành" : renderStatusTodo(e.value)}</Text>
              </Text>
            </View>
          </View>
        )
      )
    } else {
      return null
    }
  }, [listTodo, checkboxTodo])

// Resest filter when listTodoSlice change
  useLayoutEffect(()=>{
    setListTodo(listTodoSlice)
    setValue(0)
    setName("")
  },[listTodoSlice])


// Filter follow status task
  useEffect(()=>{
     if(value !== 0 ){
       if(value === 1){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 1 && e.status === "Processing"))
       }else if(value === 2){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 2 && e.status === "Processing"))
       }else if(value === 3){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 3 && e.status === "Processing"))
       }else if(value === 4){
        setListTodo(listTodoSlice.filter((e:any)=> e.value === 4 && e.status === "Processing"))
       }if(value === 5){
        setListTodo(listTodoSlice.filter((e:any)=> e.status === "Completed"))
       }if(value === 6){
        setListTodo(listTodoSlice)
       }
       
     }
  },[value])

// Filter follow block  
  useEffect(()=>{
    if(filterBlockSlice !== null){
      setValue(filterBlockSlice.value)
      setName(filterBlockSlice.name)
    }
},[filterBlockSlice])

// Search task
useEffect(()=>{
  if(searchvalue !== ""){
    var filterTask=listTodoSlice.filter((e:any)=>{
      return e.name.toLowerCase().indexOf(searchvalue.toLowerCase()) !== -1;
    })
    setListTodo(filterTask); 
  }else{
    setListTodo(listTodoSlice)
  }
 },[searchvalue])

  return (
    <SafeAreaView>
      <SafeAreaView style={styles.wrapListTodoScreen}>
       <ImageBackgroundScreen />
      <Text style={styles.titleScreen}>Danh sách công việc cần làm</Text>
      <Dropdown label="Lọc" data={dataFilter} value={value} setName={setName} name={name} setValue={setValue} classDropdown={styles.dropdown} classWrapvalueDropdown={styles.wrapValueDropdown} />
      <Input placeholder="Nhập công việc cần tìm kiếm..." classesInput={styles.textInput} value={searchvalue} onChange={setSearchValue}></Input>
      {listTodo?.length > 0 ? <>
      <ScrollView >
        <View style={styles.wrapTodo}>
          {renderTodo}
        </View>
        <View style={styles.wrapButton}>
        <Button title="Completed" classesButton={styles.buttonCompleted} classLable={styles.lablebtnComplete} onpress={handelActionCompleted}/>
        <Button title="Delete" classesButton={styles.buttonDelete} classLable={styles.lablebtnDelete} onpress={handelActionDelete}/>
        </View>
      </ScrollView>
      </>:<>
      <View style={styles.wrapContentNullTodo}>
        <Text style={styles.nameNullTodo}>
          Bạn chưa thêm công việc cần làm nào vui lòng thêm công việc cần làm
        </Text>
        <Button title='Thêm công việc mới' classesButton={styles.button} classLable={styles.lableButton} onpress={() => { navigation.navigate("Add new") }} />
      </View>
      </>}
    </SafeAreaView>
    {showModalDelete && <Modal description="Bạn có chắc chắn muốn xóa công việc này ?" title="Delete task" handelCancel={handelCloseModalDele} handelOk={handelDeleteTodo}/>}
    {showModalNotiChooseTask && <Modal description="Vui lòng tích chọn vào công việc" title="Notification" type="modalNoti" handelOk={handelCloseModalNotiChooseTask}/>}
    {showModalCompleted && <Modal description="Bạn có chắc chắn hoàn thành công việc này ?" title="Completed task" handelCancel={handelCloseModalCompleted} handelOk={handelCompletedTodo}/>}
    </SafeAreaView>
  )
}

export default ListTodo