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

export const OrderList = () => {
  const customer_id = useSelector((state) => state.order.custId);
  const orderFullData = SamplesData.Order;
  const orderData = orderFullData.filter(function (item) {
    return item.CUSTOMER_ID == customer_id;
  });
  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="18" pb="3">
        RECENT ORDER HISTORY
      </Heading>
      <FlatList
        data={orderData}
        ListHeaderComponent={() => (
          <Box
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{
              backgroundColor: "#215E94",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <HStack space={3}>
              <VStack space={2}>
                <Text color="white" paddingLeft="10px">
                  Date
                </Text>
              </VStack>
              <Spacer />
              <VStack space={4}>
                <Text color="white" paddingLeft="40px">
                  Orders
                </Text>
              </VStack>
              <Spacer />
              <VStack space={1}>
                <Text color="white" paddingLeft="30px">
                  Qty
                </Text>
              </VStack>
              <Spacer />
              <VStack space={2}>
                <Text color="white" paddingRight="20px">
                  Status
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <VStack space={1}>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                >
                  {item.ORDER_DATE.replace("2021", "21")}
                </Text>
              </VStack>

              <VStack space={4}>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.PRODUCT_NAME.slice(0, 15) + "..."}
                </Text>
              </VStack>

              <VStack space={1}>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.PHYSICAL_QUANTITY}
                </Text>
              </VStack>

              <VStack space={2}>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.DELIVERY_STATUS}
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.ORDER_ID}
      />
    </Box>
  );
};

export const AddressSelect = () => {
  const dispatch = useDispatch();

  const customer_id = useSelector((state) => state.order.custId);

  const customerFullData = SamplesData.Customer;
  const customerData = customerFullData.filter(function (item) {
    return item.CUSTOMER_ID == customer_id;
  });

  const addressData = customerData.map(function (item) {
    return `${item.LINE_1_ADDRESS} ${item.CITY} ${item.STATE}`;
  });

  let [address, setAddress] = React.useState(addressData[0]);
  dispatch(
    addressSelected({
      address: addressData[0],
    })
  );
  return (
    <VStack alignItems="flex-start" style={{ paddingLeft: 0 }}>
      <Select
        selectedValue={address}
        minWidth="280"
        accessibilityLabel="Choose Service"
        placeholder="Choose Address"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        style={{ color: "#03a3e1", fontSize: "16" }}
        onValueChange={(itemValue) => {
          setAddress(itemValue);
          dispatch(
            addressSelected({
              address: itemValue,
            })
          );
        }}
      >
        {addressData ? (
          addressData.map((address) => (
            <Select.Item label={address} value={address} />
          ))
        ) : (
          <div></div>
        )}
      </Select>
    </VStack>
  );
};

const DeliverOptionsScreen = ({ navigation }) => {
  const customer_id = useSelector((state) => state.order.custId);

  const customerFullData = SamplesData.Customer;
  const customerData = customerFullData.filter(function (item) {
    return item.CUSTOMER_ID == customer_id;
  });

  const customerName =
    "Dr. " + customerData[0].FIRST_NAME + " " + customerData[0].NAME;

  const continueOrder = () => {
    navigation.navigate("Products");
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
              alignSelf: "flex-start",
            }}
          >
            <FontAwesome5
              name="angle-left"
              size={27}
              color="white"
              style={{ marginLeft: 20, marginRight: 65 }}
              onClick={() => navigation.push("CustomerSelection")}
            />

            <Text color="white" fontSize="16">
              Deliver Options
            </Text>
          </HStack>
        </Box>
        <Box
          alignItems="flex-end"
          pr="5"
          pt="5"
          pl="5"
          pb="3"
          backgroundColor="white"
        >
          <VStack alignItems="flex-end" space="5">
            <FormControl>
              <Text style={{ color: "#03a3e1" }} bold fontSize="18">
                {customerName}
              </Text>
              <Center flex={1} px="3" color="blue">
                <AddressSelect />
              </Center>
            </FormControl>
            <FormControl>
              {/* <FormControl.Label mb="3">DELIVER TO</FormControl.Label> */}
              <Heading fontSize="18" pb="3">
                DELIVER TO
              </Heading>
              <Radio.Group nativeID="patani" name="day_night" value="1">
                <VStack space="3">
                  <Radio value="1">Practice address as above</Radio>
                  <Radio value="2">Practice address with change</Radio>
                  <Radio value="3">Pharmacy</Radio>
                  <Radio value="4">New address</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>
            <Divider />
            <Center flex="1">
              <OrderList />
            </Center>
          </VStack>
        </Box>
        <Box backgroundColor="white" pb="3">
          <View
            style={{
              height: 100,
              justifyContent: "left",
              alignItems: "left",
            }}
          >
            <Center flex={1}>
              <Button onPress={continueOrder}>Continue</Button>
            </Center>
          </View>
        </Box>
      </NativeBaseProvider>
    </div>
  );
};
export default DeliverOptionsScreen;

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
