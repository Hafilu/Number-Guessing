import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import Card from "../Components/Ui/Card";
import Instructiontext from "../Components/Ui/Instructiontext";
import Primarybutton from "../Components/Ui/Primarybutton";
import Title from "../Components/Ui/Title";
import colors from "../constants/colors";

function Startgamescreen({ onpicknumber }) {
  const [enterdnumber, setEnterdNumber] = useState("");

  const {width, height} =  useWindowDimensions();

  function numberInputHandler(enterdtext) {
    setEnterdNumber(enterdtext);
  }

  function resetInputHandler() {
    setEnterdNumber("");
  }

  function confirmInputHandler() {
    const choosenumber = parseInt(enterdnumber);
    if (choosenumber <= 0 || isNaN(choosenumber)) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onpicknumber(choosenumber);
  }

  const margintop = height < 380 ? 30:100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootcontainer , {marginTop:margintop}]}>
      <Title>Guess My Number</Title>
      <Card>
        <Instructiontext>Enter a Number</Instructiontext>
        <TextInput
          style={styles.numberinput}
          maxLength={2}
          keyboardType="number-pad"
          value={enterdnumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonscontainer}>
          <View style={styles.buttoncontainer}>
            <Primarybutton onpress={resetInputHandler}>RESET</Primarybutton>
          </View>
          <View style={styles.buttoncontainer}>
            <Primarybutton onpress={confirmInputHandler}>CONFIRM</Primarybutton>
          </View>
        </View>
      </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default Startgamescreen;

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  rootcontainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
  },

  numberinput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: colors.accent500,
    color: colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonscontainer: {
    flexDirection: "row",
  },
  buttoncontainer: {
    flex: 1,
  },
});
