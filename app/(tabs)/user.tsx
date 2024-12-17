import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function UserProfile() {
  return (
    <View
      style={{ backgroundColor: "#4ccd99", flex: 1, flexDirection: "column" }}
    >
      <View
        style={{
          borderStartStartRadius: 20,
          borderStartEndRadius: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 5,
          alignSelf: "flex-end",
          flex: 1,
          backgroundColor: "white",
          paddingLeft: 10,
          paddingTop: 100,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "65%",
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "black",
            margin: 16,
            alignSelf: "center",
          }}
        >
          Lê Phúc Hưng
        </Text>
        <View style={{ width: "90%", height: 1, backgroundColor: "black" }} />
        <View
          style={{
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 0,
          }}
        >
          <View
            style={{
              alignContent: "flex-start",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                margin: 16,
                alignSelf: "center",
              }}
            >
              Email:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                margin: 16,
                alignSelf: "center",
              }}
            >
              hihiheheJ97@gmail.com
            </Text>
          </View>
          <View
            style={{
              alignContent: "flex-start",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                margin: 16,
                alignSelf: "center",
              }}
            >
              Địa chỉ:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                margin: 16,
                alignSelf: "center",
              }}
            >
              11111 Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
            </Text>
          </View>
          <View
            style={{
              alignContent: "flex-start",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                margin: 16,
                alignSelf: "center",
              }}
            >
              Token hiện có:
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                margin: 16,
                alignSelf: "center",
              }}
            >
              12000
            </Text>
          </View>
        </View>
      </View>

      <Image
        source={require("../../assets/images/lph.jpg")}
        style={{
          borderRadius: 180,
          borderWidth: 8,
          borderColor: "#007f73",
          width: 250,
          height: 250,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 150,
        }}
      />
    </View>
  );
}
