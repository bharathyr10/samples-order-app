import React from "react";
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
    Checkbox,
    Button,
} from "native-base";

const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#ffffff" }}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={require("../assets/images/background.jpg")}
                style={{ height: Dimensions.get("window").height / 2.5 }}
            >
                <View style={styles.brandView}>
                    <FontAwesome5 name="clinic-medical" size={44} color="white" />
                    <Text style={styles.brandViewText}>Samples App</Text>
                </View>
            </ImageBackground>

            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={{ color: "black", fontSize: 34 }}>Welcome</Text>
                    <Text style={{ paddingTop: 10 }}>
                        Don't have an account ?
            <Text style={{ color: "red", fontStyle: "italic" }}>
                            {" "}
                            Register Now
            </Text>
                    </Text>
                    <View style={{ marginTop: 50 }}>
                        <NativeBaseProvider>
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
                        </NativeBaseProvider>
                    </View>
                    <View style={styles.forgotPassView}>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <NativeBaseProvider>
                                <Checkbox
                                    value="one"
                                    my={1}
                                    style={{ alignSelf: "flex-start" }}
                                >
                                    {" "}
                                    Remember Me
                </Checkbox>
                            </NativeBaseProvider>
                        </View>
                        <View style={{ flex: 1, marginRight: 0 }}>
                            <NativeBaseProvider>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        alignSelf: "flex-end",
                                        justifyContent: "center",
                                    }}
                                >
                                    Forgot Password
                </Text>
                            </NativeBaseProvider>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <NativeBaseProvider>
                            <Center flex={1} px="3">
                                <Button
                                    size="lg"
                                    style={styles.loginButton}
                                    onPress={() => console.log("Login successful")}
                                >
                                    Login
                </Button>
                            </Center>
                        </NativeBaseProvider>
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
        backgroundColor: "#6d07f2",
        width: Dimensions.get("window").width / 2,
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});
