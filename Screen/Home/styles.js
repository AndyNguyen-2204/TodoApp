import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  wrapHomeScreen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapAllcontent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  wrapbox: {
    height: 200,
    width: "48%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 4,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 55
  },
  type1: {
    backgroundColor: "#ff0000"
  },
  type2: {
    backgroundColor: "#ff4500"
  },
  type3: {
    backgroundColor: "#ffff00"
  },
  type4: {
    backgroundColor: "#9acd32"
  },
  type5: {
    backgroundColor: "#CC99FF"
  },
  type6: {
    backgroundColor: "#FFFACD"
  },
  type7: {
    backgroundColor: "#33CCFF"
  },
  type8: {
    backgroundColor: "#F4A460"
  },
  button: {
    backgroundColor: "#55847A",
    borderRadius: 5,
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 15,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },
  lableButton: {
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#ffffff"
  }

})