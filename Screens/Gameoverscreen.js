import { Image,  StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Primarybutton from "../Components/Ui/Primarybutton";
import Title from "../Components/Ui/Title";
import colors from "../constants/colors";

function Gameoverscreen({ roundsnumber, usernumber, onStartNewGame }) {

  const{width, height}=useWindowDimensions();

  let imagesize =300;

  if(width<380){
    imagesize=150;
  };

  if(height<400){
    imagesize=80;
  };

  const imagestyle={
    width: imagesize,
    height:imagesize,
    borderRadius:imagesize/2

  }


  return (
  
    <View style={styles.rootcontainer}>
      <Title>Game Over</Title>
      <View style={[styles.imagecontainer, imagestyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summarytext}>
        Your phone needed <Text style={styles.highlight}>{roundsnumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{usernumber}</Text>
      </Text>
      <Primarybutton onpress={onStartNewGame}>START NEW GAME</Primarybutton>
    </View>
 
  );
}

export default Gameoverscreen;

const styles = StyleSheet.create({
   
  rootcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imagecontainer: {
    // width: 300,
    // height: 300,
    // borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summarytext: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
