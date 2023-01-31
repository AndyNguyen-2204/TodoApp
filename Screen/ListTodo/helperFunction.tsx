import {styles} from "./style"
export function renderStatusTodo(value:number){
   if(value===1){
    return "Khẩn cấp và quan trọng"
   }else if(value===2){
    return "Quan trọng nhưng không phải khẩn cấp"
   }else if (value===3){
    return "Khẩn cấp nhưng không quan trọng"
   }else if (value===4){
    return "Không khẩn cấp cũng không quan trọng"
   }
}
export function renderColorStatus(value:number){
   if(value===1){
    return [styles.nameTodo,styles.type1]
   }else if(value===2){
    return [styles.nameTodo,styles.type2]
   }else if (value===3){
    return [styles.nameTodo,styles.type3]
   }else if (value===4){
    return [styles.nameTodo,styles.type4]
   }
}