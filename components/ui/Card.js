import { StyleSheet, View, Dimensions } from "react-native";
import Color from "../../constant/Color";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 34,
    marginHorizontal: 24,
    padding: 15,
    backgroundColor: Color.primary800,
    borderRadius: 10,
    elevation: 5,
    // flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
  },
});
