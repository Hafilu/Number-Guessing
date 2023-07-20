import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../constants/colors";

function Primarybutton({ children, onpress }) {
  return (
    <View style={styles.outercontainer}>
      <Pressable
        style={styles.innercontainer}
        android_ripple={{ color: colors.primary500 }}
        onPress={onpress}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Primarybutton;

const styles = StyleSheet.create({
  outercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innercontainer: {
    backgroundColor: colors.primary700,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 5,
  },
  buttontext: {
    color: colors.accent500,
    textAlign: "center",
  },
});
