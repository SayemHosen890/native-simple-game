import { StyleSheet, Text } from "react-native";
import Color from "../../constant/Color";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.introText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  introText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Color.accent500,
  },
});
