import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";

export default function TranslateLayout() {
  const dropdownData = [
    { title: "Alphabet -> Braile" },
    { title: "Braile -> Alphabet" },
  ];

  const [selectedItem, setSelectedItem] = useState(dropdownData[0]);

  const handlePress = () => {
    setSelectedItem((prevItem) =>
      prevItem.title == "Alphabet -> Braile" ? dropdownData[1] : dropdownData[0]
    );
  };

  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <View className="container mt-16 flex-row content-center justify-between align-baseline">
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
          Dịch thuật
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
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SelectDropdown
          data={dropdownData}
          onSelect={(selectedItem, index) => {
            setSelectedItem(selectedItem);
          }}
          defaultValue={selectedItem.title}
          renderButton={(selectItem, isOpened) => {
            return (
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 100,
                  width: "80%",
                  height: 50,
                  justifyContent: "center",
                  paddingLeft: 20,
                  marginTop: 20,
                  elevation: 5,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.5,
                  shadowRadius: 3,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  {selectedItem.title}
                </Text>
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  backgroundColor: isSelected ? "#007f73" : "white",
                  borderRadius: 10,
                  padding: 10,
                  width: 200,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: isSelected ? "white" : "#007f73",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            );
          }}
          dropdownStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            width: 200,
            marginTop: 20,
          }}
        />
        <Pressable
          onPress={handlePress}
          style={{
            backgroundColor: "#007F73",
            borderRadius: 100,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <FontAwesome6 name="rotate" size={24} color="white" />
        </Pressable>
      </View>
      <TextInput
        editable
        multiline
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          width: "100%",
          height: 200,
          paddingLeft: 20,
          marginTop: 20,
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          fontSize: 20,
        }}
        placeholder="Nhập thông tin muốn dịch"
      />
      <View className="flex-row align-middle justify-center gap-10">
        <Pressable
          style={{
            width: "45%",
            backgroundColor: "#FFAF36",
            borderRadius: 10,
            alignContent: "center",
            alignSelf: "center",
            padding: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Dịch
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "45%",
            backgroundColor: "#FF3636",
            borderRadius: 10,
            alignContent: "center",
            alignSelf: "center",
            padding: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Xoá
          </Text>
        </Pressable>
      </View>
      <TextInput
        multiline
        aria-disabled
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          width: "100%",
          height: 200,
          paddingLeft: 20,
          marginTop: 20,
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          fontSize: 20,
        }}
      />
      {selectedItem.title != "Alphabet -> Braile" ? (
        <Image source={require("../../assets/images/Braille-keyboard.png")} />
      ) : null}
    </View>
  );
}
