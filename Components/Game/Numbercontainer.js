import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

function Numbercontainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{children}</Text>
    </View>
  );
}

export default Numbercontainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numbertext: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
