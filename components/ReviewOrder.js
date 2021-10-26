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
      <View>
        <Text>
          Dr. {customerData?.custName}, please review and authorise your sample
          order
        </Text>
        <Text> DELIVERY ADDRESS:</Text>
        <Text>25 Wallstreet, NSW 2065</Text>
      </View>

      <FlatList
        data={orderData}
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
              <Text fontWeight="medium">{item.PRODUCT}</Text>
              <Text color="blueGray.400">{item.QUANTITY}</Text>
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
          ) : null}
        </View>
        <Signature
          onOK={handleOK}
          onEmpty={handleEmpty}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          webStyle={style}
        />
      </View>
      <View>
        <Button my="2" onPress={() => setIsOpen(!isOpen)}>
          Place Order
        </Button>
      </View>
      <Slide in={isOpen} placement="bottom">
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
      </Slide>
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
