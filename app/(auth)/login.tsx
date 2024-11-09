import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, Button, Pressable } from "react-native";

export default function Login() {
  return (
    <View className="flex h-full justify-center">
      <View
        style={{
          position: "absolute",
          flex: 1,
          top: "35%",
          left: -5,
          width: "200%",
          height: "150%",
          backgroundColor: "#34D399",
          transform: [{ rotate: "166deg" }],
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
      <Pressable
        className="mx-auto w-4/5 h-20 justify-center elevation-xl"
        style={{
          backgroundColor: "#007F73",
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text className="text-center text-3xl font-bold text-white">
          Đăng nhập
        </Text>
      </Pressable>
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
      <View className=" w-9/12 color-white mx-auto mt-10 border-white border-b-4" />
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
    </View>
  );
}
