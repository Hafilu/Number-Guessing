import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function Instructiontext({ children, style }) {
  return <Text style={[styles.instructioncontainer, style]}>{children}</Text>;
}

export default Instructiontext;

const styles = StyleSheet.create({
  instructioncontainer: {
    fontFamily: "open-sans",
    color: colors.accent500,
    fontSize: 24,
  },
});
