import { StyleSheet, Text, View ,Dimensions} from "react-native";
import Color from "../../constant/Color";

const GameContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default GameContainer;

const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth <380 ? 12 : 24,
    margin: deviceWidth <380 ? 12 : 24,
    borderWidth: 2,
    borderColor: Color.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: deviceWidth <380 ? 26 : 34,
    fontFamily:'open-sans-bold',
  },
});
