import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    wrapListTodoScreen: {
        backgroundColor: "#000000",
        height: "100%",
        width: "100%",
        paddingHorizontal: 15
    },
    titleScreen: {
        fontSize: 25,
        color: "#ffffff",
        alignSelf: "center",
        fontWeight: "600",
        marginTop: 20
    },
    wrapTodo: {
    },
    wrapTodoinner: {
        flexDirection: "row",
        gap: 20,
        paddingVertical: 17,
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#363636",
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
        borderWidth: 1
    },
    checked: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center",
    },
    nameTodo: {
        fontSize: 17,
        color: "#ffffff",
        width: "90%"

    }
})