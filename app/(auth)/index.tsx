import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { useState } from "react";

function LoginView() {
  return (
    <>
      <View className="w-9/12 mx-auto mt-4 row-auto flex-row align-middle">
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Image
            source={require("../../assets/images/google.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <View className="w-1/12" />
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl font-bold text-white text-left">
            Đăng nhập bằng Google
          </Text>
        </View>
      </View>
      <View className="w-9/12 mx-auto mt-4 row-auto flex-row align-middle">
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Image
            source={require("../../assets/images/facebook.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <View className="w-1/12" />
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl font-bold text-white ">
            Đăng nhập bằng Facebook
          </Text>
        </View>
      </View>
      <View className="w-9/12 mx-auto mt-4 row-auto flex-row align-middle">
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Image
            source={require("../../assets/images/outlook.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <View className="w-1/12" />
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-2xl font-bold text-white ">
            Đăng nhập bằng Outlook
          </Text>
        </View>
      </View>
    </>
  );
}

function LoginText() {
  return (
    <>
      <View className="w-9/12 mx-auto mt-4 row-auto flex-column align-middle mb-8">
        <TextInput
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",

            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Điền tên đăng nhập"
        />
        <TextInput
          className="mt-7"
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Điền mật khẩu"
        />
        <View
          className="mx-auto w-4/5 h-14 justify-center drop-shadow-2xl shadow-black elevation-xl"
          style={{
            backgroundColor: "#007F73",
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Link
            href="/(tabs)"
            className="text-center text-2xl font-bold text-white"
          >
            Đăng nhập
          </Link>
        </View>
      </View>
    </>
  );
}

function RegisterText() {
  return (
    <>
      <View className="w-9/12 mx-auto mt-4 row-auto flex-column align-middle mb-8">
        <TextInput
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",

            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Điền tên đăng nhập"
        />
        <TextInput
          className="mt-7"
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Điền mật khẩu"
        />
        <TextInput
          className="mt-7"
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Tên người dùng"
        />
        <TextInput
          className="mt-7"
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Điền địa chỉ email"
        />
        <TextInput
          className="mt-7"
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 20,
            fontWeight: "semibold",
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}
          placeholder="Điền địa chỉ"
        />
        <Pressable
          className="mx-auto w-3/5 h-14 justify-center drop-shadow-2xl shadow-black elevation-xl"
          style={{
            backgroundColor: "#007F73",
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Text className="text-center text-2xl font-bold text-white">
            Đăng ký
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  return (
    <View className="flex h-full justify-center">
      <KeyboardAvoidingView>
        <View
          style={{
            position: "absolute",
            flex: 1,
            top: isLogin || isRegister ? "8%" : "30%",
            left: -5,
            width: Dimensions.get("window").width * 2,
            height: Dimensions.get("window").height * 1.5,
            backgroundColor: "#34D399",
            transform: [
              {
                rotate: isLogin || isRegister ? "285deg" : "170deg",
              },
            ],
            overflow: "hidden",
          }}
        />
        <Text className="text-center text-5xl font-medium color-green-700">
          Hello
        </Text>
        <Text
          className="text-center text-7xl font-medium color-green-700"
          style={{
            marginTop: 20,
          }}
        >
          ⠓⠑⠇⠇⠕
        </Text>
        <Image
          className="w-40 h-40 mt-10 mx-auto"
          source={require("../../assets/images/brl.png")}
        ></Image>
        {isLogin || isRegister ? null : (
          <Pressable
            className="mx-auto w-4/5 h-20 justify-center elevation-xl"
            style={{
              backgroundColor: "#007F73",
              borderRadius: 15,
              marginTop: 20,
            }}
            onPress={() => setIsLogin(true)}
          >
            <Text className="text-center text-3xl font-bold text-white">
              Đăng nhập
            </Text>
          </Pressable>
        )}
        {isLogin || isRegister ? null : (
          <>
            <Pressable
              className="mx-auto w-3/5 h-14 justify-center drop-shadow-2xl shadow-black elevation-xl"
              style={{
                backgroundColor: "#007F73",
                borderRadius: 15,
                marginTop: 20,
              }}
              onPress={() => setIsRegister(true)}
            >
              <Text className="text-center text-2xl font-bold text-white">
                Đăng ký
              </Text>
            </Pressable>
            <View className=" w-9/12 color-white mx-auto mt-10 border-white border-b-4" />
          </>
        )}

        {!isLogin && !isRegister ? <LoginView /> : null}
        {isLogin ? <LoginText /> : null}
        {isRegister ? <RegisterText /> : null}
        {isLogin || isRegister ? (
          <Pressable
            className="mx-auto justify-center"
            onPress={() => {
              setIsLogin(false);
              setIsRegister(false);
            }}
          >
            <Text className="text-center text-xl font-bold text-blue-700">
              Quay lại?
            </Text>
          </Pressable>
        ) : null}
      </KeyboardAvoidingView>
    </View>
  );
}
