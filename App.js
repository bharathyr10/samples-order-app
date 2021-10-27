import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/Login";
import WelcomeScreen from "./components/WelcomeScreen";
import { NativeBaseProvider } from "native-base";
import CustomerSelection from "./components/CustomerSelection";
import DeliverOptionsScreen from "./components/DeliverOptions";
import FinalScreen from "./components/FinalScreen";
import Products from "./components/Products";
import ReviewOrder from "./components/ReviewOrder";
import { SignatureScreen } from "./components/test";
import { store } from "./components/app/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            {/* <Stack.Screen name="Test" component={SignatureScreen} /> */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="final" component={FinalScreen} />
            <Stack.Screen
              name="CustomerSelection"
              component={CustomerSelection}
            />
            <Stack.Screen
              name="DeliverOptions"
              component={DeliverOptionsScreen}
            />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
