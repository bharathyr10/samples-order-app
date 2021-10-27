import React, { useState } from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  Input,
  Icon,
  Stack,
  Center,
  NativeBaseProvider,
  Checkbox,
  Button,
} from "native-base";
import WelcomeScreen from "./WelcomeScreen";
import * as data from "./data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "./orderSlice";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const showMessage = () => {
    //Alert.alert("Email enterted is ", email);
    const loginData = data.Login;

    for (var i = 0; i < loginData.length; i++) {
      if (email === loginData[i] ?.email) {
        console.log("Name:", loginData[i] ?.name);
        navigation.navigate("Welcome", { name: loginData[i] ?.name });
        dispatch(
          userLoggedIn({
            userName: loginData[i] ?.name,

          })
        );
      } else {
        console.log("You are not authorized to login");
      }
    }
  };
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../assets/images/apptheme.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      >
        <View style={styles.brandView}>
          <FontAwesome5 name="clinic-medical" size={44} color="white" />
          <Text style={styles.brandViewText}>Sample Order</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: "black", fontSize: 34 }}>Welcome</Text>
          {/* <Text style={{ paddingTop: 10 }}>
            Don't have an account ?
            <Text style={{ color: "red", fontStyle: "italic" }}>
              {" "}
              Register Now
            </Text>
          </Text> */}
          <View style={{ marginTop: 50 }}>
            <Center flex={1} px="5">
              <Stack space={4} w="100%" alignItems="center">
                <Input
                  w={{
                    base: "110%",
                    md: "30%",
                  }}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  size="xl"
                  variant="outline"
                  placeholder="Email"
                  onChangeText={(email) => setEmail(email)}
                  defaultValue={email}
                />
                <Input
                  w={{
                    base: "110%",
                    md: "30%",
                  }}
                  InputRightElement={
                    <Icon
                      as={<MaterialIcons name="visibility-off" />}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  }
                  size="xl"
                  variant="outline"
                  type="password"
                  placeholder="Password"
                />
              </Stack>
            </Center>
          </View>
          <View style={styles.forgotPassView}>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Checkbox value="one" my={1} style={{ alignSelf: "flex-start" }}>
                {" "}
                Remember Me
              </Checkbox>
            </View>
            {/* <View style={{ flex: 1, marginRight: 0 }}>
              <Text
                style={{
                  fontSize: 15,
                  alignSelf: "flex-end",
                  justifyContent: "center",
                }}
              >
                Forgot Password
              </Text>
            </View> */}
          </View>
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Center flex={1} px="3">
              <Button
                size="lg"
                style={styles.loginButton}
                onPress={showMessage}
              >
                Login
              </Button>
            </Center>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
  },
  loginButton: {
    alignSelf: "center",
    // backgroundColor: "#0891b2",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
