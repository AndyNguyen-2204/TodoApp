import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export const styles = StyleSheet.create({
    wrapAddScreen: {
        paddingHorizontal: 15,
        height: "100%",
        width: "100%",
        backgroundColor: "#EEEEEE"
    },
    image: {
        alignSelf: "center",
        width: 150,
        marginTop: 80
    },
    textInput: {
        backgroundColor: "#ffffff",
        width: 300,
        borderRadius: 11,
        paddingHorizontal: 10,
        color: "#000000",
        fontWeight: "500",
        fontFamily: "Poppins",
        fontSize: 13,
        lineHeight: 20,
        marginTop: 15,
        alignSelf: "center",

    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: '#55847A',
        minHeight: 35,
        borderRadius: 5,
        marginTop: 10,
        width: 300,
        alignSelf: "center",
        zIndex: 4,
        gap:5
    },
    wrapValueDropdown: {
        width: 300,
        alignSelf:"center",
    },
    wrapBtnChooseDate:{
      borderWidth:1,
      width:300,
      alignSelf:"center",
      marginTop:10,
      paddingHorizontal:15,
      paddingVertical:5,
      borderRadius:5,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      gap:10
    },
    contentbtnDate:{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 22,
        textAlign: "center",
        color: "#000000",
        textAlign:"center"
    },
    wrapButton: {
        flexDirection: "row",
        alignSelf: "center",
        gap: 10,
        marginTop: 20,
        zIndex: 1
    },
    buttonSave: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#55847A",
        maxWidth: 120,
        borderRadius: 5,
    },
    labelbtnSave: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
    },
    buttonClear: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#696969",
        maxWidth: 120,
        borderRadius: 5,
    },
    labelbtnClear: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#ffffff",
    },
})