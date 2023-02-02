import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    wrapListTodoScreen: {
        backgroundColor: "#EEEEEE",
        height: "100%",
        width: "100%",
        paddingHorizontal: 15
    },
    titleScreen: {
        fontSize: 25,
        color: "#000000",
        alignSelf: "center",
        fontWeight: "500",
        marginBottom: 20,
        marginTop: 30,
        zIndex: 3
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#55847A',
        minHeight: 35,
        borderRadius: 5,
        width: 300,
        alignSelf: "center",
        zIndex: 4,
        gap: 5
    },
    wrapValueDropdown: {
        width: 300,
        alignSelf: "center",
    },
    wrapTodo: {
    },
    wrapTodoinner: {
        flexDirection: "row",
        gap: 20,
        paddingVertical: 17,
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#555555",
        marginTop: 20,
        borderRadius: 10,
    },
    wrapContent: {
        width: "100%"
    },
    checkbox: {
        height: 30,
        width: 30,
        borderColor: "#ffffff",
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    checked: {
    },
    nameTodo: {
        fontSize: 17,
        color: "#ffffff",
        width: "90%",
        marginTop: 5
    },
    wrapButton: {
        flexDirection: "row",
        gap: 10,
        paddingVertical: 20,
        justifyContent: "center"
    },
    buttonCompleted: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#55847A",
        borderRadius: 5,
        width: 150
    },
    lablebtnComplete: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
    },
    buttonDelete: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#696969",
        borderRadius: 5,
        width: 150
    },
    lablebtnDelete: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
    },
    type1: {
        color: "#ff0000"
    },
    type2: {
        color: "#ff4500"
    },
    type3: {
        color: "#ffff00"
    },
    type4: {
        color: "#9acd32"
    },
    type5: {
        color: "#CC99FF"
    },
    wrapContentNullTodo: {
        height: "70%",
        flexDirection: "column",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#55847A",
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        alignSelf: "center",
        marginTop: 30,
        paddingHorizontal: 40,
        paddingVertical: 15,
    },
    lableButton: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff"
    },
    nameNullTodo: {
        fontSize: 20,
        color: "#000000",
        width: "100%",
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "500",
        fontFamily: 'Poppins',
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#55847A",
        borderRadius: 3,
        paddingHorizontal: 15,
        marginTop: 20
    }
})