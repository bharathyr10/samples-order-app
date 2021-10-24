import React from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  Button,
} from "react-native";

const CustomerSelection = ({ navigation, route }) => {
  return (
    <View style={styles.topView}>
      <Text>Tap a customer to select</Text>

      <Button
        title="Go to Home"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button
        title="Go back"
        style={styles.buttonStyle}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
export default CustomerSelection;
const styles = StyleSheet.create({
  topView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    padding: 20,
  },
});
