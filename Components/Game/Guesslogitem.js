import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

function Guesslogitem({ roundnumber, guess }) {
  return (
    <View style={styles.listitem}>
      <Text style={styles.itemtext}>#{roundnumber}</Text>
      <Text style={styles.itemtext}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default Guesslogitem;

const styles = StyleSheet.create({
  listitem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 10,
    width: "100%",
  },
  itemtext: {
    fontFamily: "open-sans",
  },
});
