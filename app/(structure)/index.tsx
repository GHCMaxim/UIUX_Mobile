import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View, Text, Image, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function StructureCard() {
  return (
    <>
      <View style={{ width: "100%", height: 1, backgroundColor: "black" }} />
      <View
        style={{
          paddingVertical: 5,
          paddingLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          }}
        >
          a
        </Text>
        <Image
          source={require("../../assets/images/Braille.png")}
          resizeMode="contain"
          style={{
            height: 50,
            width: 50,
          }}
        />
      </View>
    </>
  );
}

export default function StructureView() {
  return (
    <View
      style={{
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <View className="container mt-16 flex-row content-center justify-between align-baseline pl-5 pr-5">
        <Link href="/(tabs)" asChild>
          <Pressable
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="chevron-back" size={40} color="#007f73" />
          </Pressable>
        </Link>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "white",
            alignSelf: "center",
          }}
        >
          Cấu trúc
        </Text>
        <Image
          style={{
            borderRadius: 100,
            width: 50,
            height: 50,
          }}
          source={require("../../assets/images/lph.jpg")}
        />
      </View>
    </View>
  );
}
