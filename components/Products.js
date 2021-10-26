import React, { useState } from "react";
import {
  Text,
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
  NativeBaseProvider,
  Button,
  Select,
  Checkbox,
  VStack,
  Divider,
  Box,
  HStack,
  FlatList,
  Spacer,
} from "native-base";
import productlist from "./data/data.json";
export const productslist = [
  {
    PRODUCT_ID: "100",
    PRODUCT: "Pfizer-BioNTech Ointment 5g",
  },
  {
    PRODUCT_ID: "200",
    PRODUCT: "Moderna 400ug x 10",
  },
  {
    PRODUCT_ID: "300",
    PRODUCT: "Janssen 100 mg x 10",
  },
  {
    PRODUCT_ID: "400",
    PRODUCT: "Sputnik 100 mg x 10",
  },
  {
    PRODUCT_ID: "500",
    PRODUCT: "Oxford-AstraZeneca 200 mg x 5",
  },
];

const Products = ({ navigation }) => {
  const [products, setproducts] = useState([]);
  console.log(products);
  const continueOrder = () => {
    navigation.navigate("ReviewOrder");
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
              Select the products and quantities for Dr. Atson Wan's orders
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
                        base: "100%",
                        md: "15%",
                      }}
                      style={{
                        borderColor: "#D4D4D4",
                        borderWidth: "2px",
                      }}
                      onChange={(e) =>
                        setproducts([
                          ...products,
                          {
                            PRODUCT_ID: item.PRODUCT_ID,
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
          <Button onPress={continueOrder}>Continue</Button>
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
    width: "100%",
  },
});
