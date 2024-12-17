import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, View, Text, Image, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function FlashcardCreate() {
  const [cardAmoumt, setCardAmount] = useState(0);
  return (
    <View
      style={{
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <View className="container mt-16 flex-row content-center justify-between align-baseline pl-5 pr-5">
        <Link href="/(flashcard)" asChild>
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
          Flashcard
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
      <TextInput
        style={{
          backgroundColor: "white",
          borderRadius: 27,
          padding: 20,
          marginHorizontal: 20,
          marginTop: 20,
          fontSize: 20,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
        }}
        placeholder="Nhập tên bộ flashcard"
      />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 27,
          padding: 20,
          marginHorizontal: 20,
          marginTop: 20,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "black",
          }}
        >
          Số thẻ trong bộ: {cardAmoumt}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 27,
          padding: 20,
          marginHorizontal: 20,
          marginTop: 20,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "black",
          }}
        >
          Mặt A (Alphabet):
        </Text>
        <TextInput style={{ fontSize: 20, height: 80, textAlign: "center" }} />
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 27,
          padding: 20,
          marginHorizontal: 20,
          marginTop: 20,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "black",
          }}
        >
          Mặt B (Braille):
        </Text>
        <View
          style={{
            marginLeft: -20,
          }}
        >
          <Image
            source={require("../../assets/images/Braille-keyboard.png")}
            resizeMode="contain"
            style={{
              width: "106%",
            }}
          />
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "#FFAF36",
          width: "90%",
          padding: 10,
          marginTop: 20,
          alignSelf: "center",
          borderRadius: 10,
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setCardAmount(cardAmoumt + 1)}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "white",
          }}
        >
          Thêm thẻ
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#007F73",
            width: "48%",
            padding: 10,
            alignSelf: "center",
            borderRadius: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "white",
            }}
          >
            Trước
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#007F73",
            width: "48%",
            padding: 10,
            alignSelf: "center",
            borderRadius: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "white",
            }}
          >
            Sau
          </Text>
        </Pressable>
      </View>
      <Link href={"/(flashcard)"} asChild>
        <Pressable
          style={{
            backgroundColor: "#007F73",
            width: "90%",
            padding: 10,
            marginTop: 10,
            alignSelf: "center",
            borderRadius: 10,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "white",
            }}
          >
            Hoàn thành
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
