import { StyleSheet, View } from "react-native";
import Color from "../../constant/Color";

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;


const styles=StyleSheet.create({
    card: {
    marginTop: 40,
    marginHorizontal: 24,
    padding: 15,
    backgroundColor: Color.primary800,
    borderRadius: 10,
    elevation: 5,
    // flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
  },
})
