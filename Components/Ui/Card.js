import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 15,
  },
});
