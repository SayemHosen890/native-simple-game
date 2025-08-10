import { StyleSheet, Text } from "react-native";
import Color from "../../constant/Color";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily:'open-sans-bold',
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    maxWidth:'80%',
    width:300,
    padding: 10,
  },
});
