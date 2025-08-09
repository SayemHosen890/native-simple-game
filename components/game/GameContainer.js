import { StyleSheet, Text, View } from "react-native";
import Color from "../../constant/Color";

const GameContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    borderWidth: 2,
    borderColor: Color.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize:30,
    fontFamily:'open-sans-bold'
  },
});
