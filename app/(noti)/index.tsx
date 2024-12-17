import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View, Text, Image, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function NotiCard() {
  return (
    <Link href={"/notiScreen"} asChild>
      <Pressable
        style={{
          width: "90%",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: 20,
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          padding: 20,
          alignSelf: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "black",
          }}
        >
          Thông báo về việc A
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "gray",
          }}
        >
          Ngày đăng tải: 10/12/2024
        </Text>
        <Text
          style={{
            flexWrap: "wrap",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only...
        </Text>
      </Pressable>
    </Link>
  );
}

export default function NotiView() {
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
          Thông báo
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
      <ScrollView>
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
      </ScrollView>
    </View>
  );
}
