import React, { useState } from "react";
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
  Stack,
  Center,
  Text,
  NativeBaseProvider,
  Button,
  Select,
  Slide,
  Checkbox,
  VStack,
  Divider,
  CheckIcon,
  Box,
  HStack,
  FlatList,
  Spacer,
} from "native-base";
import samplesData from "./data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { productsSelected } from "./orderSlice";
const productslist = samplesData.Product;

const Products = ({ navigation }) => {
  const custName = useSelector((state) => state.order.custName);
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  console.log(products);
  const continueOrder = () => {
    if (products.length > 0) {
      dispatch(
        productsSelected({
          products: products,
        })
      );
      navigation.navigate("ReviewOrder");
    } else {
      setIsOpen(true);
      console.log("Please select any product");
    }
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
          alignItems="center"
          style={{
            alignSelf: "center",
          }}
        >
          <FontAwesome5
            name="angle-left"
            size={27}
            color="white"
            style={{
              alignSelf: "start",
            }}
            onClick={() => navigation.push("DeliverOptions")}
          />
          <Text style={{ color: "white", fontSize: 16 }}>Choose Products</Text>
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
          <HStack
            space="4"
            alignItems="center"
            style={{
              alignSelf: "center",
              padding: "3%",
            }}
          >
            <Text color="black" fontSize="16" padding="2px">
              Select the products and quantities for Dr. {custName}'s orders
            </Text>
          </HStack>
          <FlatList
            data={productslist}
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
                <HStack space={3}>
                  <View style={styles.leftsection}>
                    <Checkbox name={item.PRODUCT} value={item.PRODUCT_ID}>
                      {" "}
                      {item.PRODUCT}
                    </Checkbox>
                  </View>
                  <View style={styles.rightsection}>
                    <Input
                      w={{
                        base: "22%",
                        md: "12%",
                      }}
                      style={{
                        borderColor: "#D4D4D4",
                        borderWidth: "2px",
                        fontSize: "14px",
                        padding: "5px",
                      }}
                      onChange={(e) =>
                        setproducts([
                          ...products,
                          {
                            PRODUCT_ID: item.PRODUCT_ID,
                            PRODUCT_NAME: item.PRODUCT,
                            PHYSICAL_QUANTITY: e.target.value,
                          },
                        ])
                      }
                    />
                  </View>
                </HStack>
              </Box>
            )}
          />

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
          <Slide in={isOpen} placement="bottom">
            <Box
              w="100%"
              position="absolute"
              bottom="2"
              p="2"
              mx={-3}
              borderRadius="xs"
              bg="danger.100"
              alignItems="center"
              justifyContent="center"
              _dark={{
                bg: "danger.200",
              }}
            >
              <HStack space={2}>
                <CheckIcon
                  size="4"
                  color="danger.600"
                  mt="1"
                  _dark={{
                    color: "danger.700",
                  }}
                />
                <Text
                  color="danger.600"
                  textAlign="center"
                  _dark={{
                    color: "danger.700",
                  }}
                  fontWeight="medium"
                >
                  Please select atleast one product.
                </Text>
              </HStack>
            </Box>
          </Slide>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Products;

const styles = StyleSheet.create({
  leftsection: {
    width: "80%",
  },
  rightsection: {
    width: "80%",
  },
});
