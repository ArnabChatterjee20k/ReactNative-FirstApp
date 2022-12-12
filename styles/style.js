import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 50,
      paddingHorizontal: 16,
      flex: 1,
    },
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8,
    },
    goalsContainer: {
      flex: 10,
    },
    goalItem: {
      padding: 10,
      margin: 4,
      borderRadius: 3,
      fontSize:20,
      backgroundColor: "#add",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
  
      elevation: 2,
    },
  });
  

export default styles;