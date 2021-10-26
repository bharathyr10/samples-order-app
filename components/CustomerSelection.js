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
  Box,
  ChevronRightIcon,
  FlatList,
  Heading,
  Input,
  HStack,
  VStack,
  Text,
  Spacer,
  StatusBar,
  NativeBaseProvider,
} from "native-base";
import Customers from "./data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { customerSelected } from "./orderSlice";

const filterItems = (data, field, value) => {
  if (field != null) {
    return data.filter((item) => {
      return item[field] === value;
    });
  }
};
const data = filterItems(Customers.Customer, "ADDRESS_TYPE", "PHYSICAL").map(
  (c) => ({ ...c, key: Math.random() })
);

//console.log(filterItems(data, "ADDRESS_TYPE", "PHYSICAL"));

const CustomerSelection = ({ navigation }) => {
  const customerID = useSelector((state) => state.order);
  const [customers, setCustomers] = React.useState(data);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setCustomers(
      data.filter((x) =>
        x.NAME.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  //console.log("Customer ID B:", customerID);
  const onCustomerSelect = (customerID, custName) => {
    dispatch(
      customerSelected({
        custId: customerID,
        custName: custName,
      })
    );
    //console.log("Customer ID A:", customerID);
    navigation.push("DeliverOptions", {
      params: { Customer_ID: customerID },
    });
  };
  return (
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
          //alignItems="center"
          style={{
            alignSelf: "center",
          }}
        >
          <FontAwesome5
            name="angle-left"
            size={27}
            color="white"
            onClick={() => navigation.push("Welcome")}
          />
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Choose A Customer
          </Text>
        </HStack>
      </Box>

      <ScrollView
        style={{ flex: 1, backgroundColor: "#ffffff" }}
        showsVerticalScrollIndicator={false}
      >
        <Box
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Heading fontSize="xl" p="4" pb="3">
            Tap a Customer to Select
          </Heading>
          <Box
          // w={{
          //   base: "100%",
          //   md: "25%",
          // }}
          >
            <Input
              mx="3"
              placeholder="Search by name..."
              onChange={handleChange}
              w={{
                base: "93%",
                // md: "25%",
              }}
            />
          </Box>

          <FlatList
            data={customers}
            renderItem={({ item }) => (
              <Box
                onClick={() =>
                  onCustomerSelect(item.CUSTOMER_ID, item.FIRST_NAME)
                }
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
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="#5e8aac"
                      bold
                    >
                      {item.NAME}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {`${item.LINE_1_ADDRESS} ${item.CITY} ${item.STATE}`}
                    </Text>
                  </VStack>
                  <Spacer />
                  <ChevronRightIcon size="7" color="#5e8aac" />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.key}
          />
        </Box>
        {/* <View>Choose A Customer</View>
      <View>Tap A Customer to Select</View>
      <View>
        <NativeBaseProvider>
          <Input
            w={{
              base: "110%",
              md: "30%",
            }}
            size="xl"
            variant="outline"
            placeholder="Search by name.."
          />
        </NativeBaseProvider>
      </View>
      <View>
        <NativeBaseProvider>
          <header>
            {Customers.Customer &&
              filterItems(data, "ADDRESS_TYPE", "PHYSICAL").map(
                ({ LINE_1_ADDRESS, CITY, STATE, NAME, CUSTOMER_ID }) => (
                  <div
                    key={CUSTOMER_ID}
                    className="row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #000",
                      padding: "10px",
                    }}
                  >
                    <div>
                      <div style={{ color: "#5e8aac" }}>
                        <strong>{NAME}</strong>
                      </div>
                      <div>{`${LINE_1_ADDRESS} ${CITY} ${STATE}`}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "#5e8aac",
                      }}
                    >
                      &gt;
                    </div>
                  </div>
                )
              )}
          </header>
        </NativeBaseProvider>
      </View>*/}
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default CustomerSelection;

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
    backgroundColor: "#6d07f2",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
