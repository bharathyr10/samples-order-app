import React from "react";
import {
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  Input,
  Icon,
  Box,
  VStack,
  Select,
  HStack,
  CheckIcon,
  FlatList,
  Avatar,
  Heading,
  Spacer,
  DashboardTable,
  Stack,
  Text,
  UserProfile,
  Center,
  DashboardTitle,
  NativeBaseProvider,
  AddIcon,
  Divider,
  Radio,
  FormControl,
  Checkbox,
  Button,
} from "native-base";
import SamplesData from "./data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { addressSelected } from "./orderSlice";





const FinalScreen = ({ navigation }) => {
  const userName = useSelector((state) => state.order.userName);


  const continueOrder = () => {
    navigation.navigate("Welcome", { name: userName })
  };
  return (
    <div>
      <NativeBaseProvider>
        <Box
          w={{
            base: "100%",
            md: "25%",
          }}
          style={{
            backgroundColor: "#215E94",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <HStack
            space="4"
            alignItems="center"
            style={{
              alignSelf: "center",
              height: 30
            }}
          >



          </HStack>
        </Box>

        <Box backgroundColor="white" pb="3" >
          <View
            style={{
              height: 100,
              justifyContent: "left",
              alignItems: "left",
              paddingTop: 70,
              height: Dimensions.get("window").height,
            }}
          >

            <Center flex={1}>
              <Text fontSize="20" style={{ color: "#03a3e1", paddingLeft: 20, paddingRight: 20, paddingBottom: 50, textAlign: "center" }}>
                Thank you for ordering. Your order is now complete
            </Text>
              <FontAwesome5 name="check-circle" size={60} color="green" />
              <Button onPress={continueOrder} style={{ marginBottom: 20, marginTop: 70 }}>Home</Button>
            </Center>
          </View>
        </Box>
      </NativeBaseProvider>
    </div>
  );
};
export default FinalScreen;

const styles = StyleSheet.create({
  loginButton: {
    alignSelf: "center",
    backgroundColor: "#6d07f2",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
