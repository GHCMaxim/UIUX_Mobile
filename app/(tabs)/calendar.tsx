import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View, Text, Image, TouchableHighlight } from "react-native";
import { Calendar } from "react-native-calendars";
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
          Lịch
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
          marginTop: 20,
        }}
      >
        <Calendar
          theme={{
            arrowColor: "black",
            todayTextColor: "white",
            todayBackgroundColor: "#007F73",
            textSectionTitleColor: "#b6c1cd",
            textMonthFontWeight: "bold",
          }}
          markedDates={{
            "2024-12-05": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-07": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-08": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-10": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-11": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-14": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-15": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-16": { selected: true, selectedColor: "#E0F2F1" },
            "2024-12-17": {
              selected: true,
              selectedColor: "#276A68",
              selectedTextColor: "white",
            },
          }}
        />
      </View>
    </View>
  );
}
