import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    // borderWidth: 2,
    borderWidth: Platform.select({ios:0,android:2}),
    borderColor: "white",
    padding: 12,
  },
});
