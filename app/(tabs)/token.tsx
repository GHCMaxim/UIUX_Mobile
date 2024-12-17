import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View, Text, Image, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function TokenView() {
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
          Nhận token
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
      <View
        style={{
          flexDirection: "column",
          gap: 15,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 27,
            padding: 20,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: -15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "black",
            }}
          >
            Tham gia sự kiện
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 27,
            padding: 20,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: -15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "black",
            }}
          >
            Xem video quảng cáo
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 27,
            padding: 20,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: -15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "black",
            }}
          >
            Điểm danh hàng ngày
          </Text>
        </Pressable>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            width: "auto",
            margin: 10,
            paddingVertical: 5,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 27,
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            marginHorizontal: 20,
          }}
        >
          <View style={{ flex: 8 }}>
            <TextInput
              style={{
                backgroundColor: "transparent",
                fontSize: 20,
                color: "black",
                fontWeight: 600,
              }}
              placeholder="Nhập giftcode"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Pressable
              style={{
                backgroundColor: "#007F73",
                borderRadius: 100,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="send" size={30} color="white" />
            </Pressable>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontWeight: 600,
            color: "white",
          }}
        >
          Gói theo chu kì
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            height: 1.5,
            backgroundColor: "white",
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: 600,
          color: "white",
          position: "absolute",
          bottom: 30,
        }}
      >
        Gói đơn chu kì
      </Text>
    </View>
  );
}
