import React, { useRef, useState } from "react";
import {
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  Image,
} from "react-native";
import {
  Slide,
  Button,
  Box,
  Input,
  Heading,
  VStack,
  HStack,
  Text,
  CheckIcon,
  Center,
  NativeBaseProvider,
  FlatList,
} from "native-base";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Signature from "react-native-signature-canvas";
import { useDispatch, useSelector } from "react-redux";
import { orderPlaced } from "./orderSlice";
import { order } from "styled-system";
const orderData = [
  {
    PRODUCT_ID: "100",
    PRODUCT: "Pfizer-BioNTech Ointment 5g",
    QUANTITY: 10,
  },
  {
    PRODUCT_ID: "200",
    PRODUCT: "Moderna 400ug x 10",
    QUANTITY: 10,
  },
  {
    PRODUCT_ID: "300",
    PRODUCT: "Janssen 100 mg x 10",
    QUANTITY: 10,
  },
  {
    PRODUCT_ID: "400",
    PRODUCT: "Sputnik 100 mg x 10",
    QUANTITY: 10,
  },
  {
    PRODUCT_ID: "500",
    PRODUCT: "Oxford-AstraZeneca 200 mg x 5",
    QUANTITY: 10,
  },
];
const ReviewOrder = ({ navigation, route }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [signature, setSign] = useState(null);
  const customerData = useSelector((state) => state.order);
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  let orderInfo = [];
  for (let i = 0; i < customerData.products.length; i++) {
    orderInfo.push({
      id: i + Math.ceil(Math.random() * 1000),
      CUSTOMER_ID: customerData.custId,
      ORDER_ID: Math.ceil(Math.random() * 1000),
      DELIVERY_ADDRESS: customerData.address,
      DELIVERY_STATUS: "PENDING",
      PRODUCT_ID: customerData.products[i].PRODUCT_ID,
      PRODUCT_NAME: customerData.products[i].PRODUCT_NAME,
      PHYSICAL_QUANTITY: customerData.products[i].PHYSICAL_QUANTITY,
      ORDER_DATE: formattedDate,
    });
  }

  const dispatch = useDispatch();
  console.log(JSON.stringify(orderInfo));
  const placeOrder = () => {
    dispatch(
      orderPlaced({
        orderDetails: orderInfo,
      })
    );
    for (let i = 0; i < orderInfo.length; i++) {
      fetch("http://localhost:8000/Order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderInfo[i]),
      }).then(() => {
        console.log("new order added");
      });
    }
    navigation.push("final");
  };
  const handleOK = (signature) => {
    console.log(signature);
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };
  const style = `.m-signature-pad--footer
  .button {
    background-color: red;
    color: #FFF;
  }`;

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
            onClick={() => navigation.push("Products")}
          />
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Review Order
          </Text>
        </HStack>
      </Box>
      <View style={{ padding: 17 }}>
        <Text color="black" fontSize="16" paddingBottom="10px">
          Dr. {customerData?.custName}, please review and authorise your sample
          order
        </Text>
        <Text bold>DELIVERY ADDRESS:</Text>
        <Text>{customerData?.address}</Text>
      </View>

      <FlatList
        data={customerData?.products}
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
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">{item.PRODUCT_NAME}</Text>
              <Text color="blueGray.600">{item.PHYSICAL_QUANTITY}</Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.preview}>
          {signature ? (
            <Image
              resizeMode={"contain"}
              style={{ width: 335, height: 114 }}
              source={{ uri: signature }}
            />
          ) : (
            <Signature
              onOK={handleOK}
              onEmpty={handleEmpty}
              descriptionText="Sign"
              clearText="Clear"
              confirmText="Save"
              //webStyle={style}
            />
          )}
        </View>
      </View>
      <View>
        <Center flex={1}>
          <Button onPress={placeOrder}>Place Order</Button>
        </Center>
      </View>
      {/* <Slide in={isOpen} placement="bottom">
        <Box
          w="100%"
          position="absolute"
          bottom="2"
          p="2"
          mx={-3}
          borderRadius="xs"
          bg="emerald.100"
          alignItems="center"
          justifyContent="center"
          _dark={{
            bg: "emerald.200",
          }}
        >
          <HStack space={2}>
            <CheckIcon
              size="4"
              color="emerald.600"
              mt="1"
              _dark={{
                color: "emerald.700",
              }}
            />
            <Text
              color="emerald.600"
              textAlign="center"
              _dark={{
                color: "emerald.700",
              }}
              fontWeight="medium"
            >
              Order Placed Successfully.
            </Text>
          </HStack>
        </Box>
      </Slide> */}
    </NativeBaseProvider>
  );
};

export default ReviewOrder;
const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});
