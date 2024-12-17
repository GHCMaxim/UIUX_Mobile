import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function FlashcardView() {
  const [modalVisible, setModalVisible] = useState(false);
  function Flashcard({ button }: { button: boolean }) {
    return (
      <Link href="/(flashcard)/cardView" asChild>
        <Pressable
          style={{
            marginVertical: 10,
            alignSelf: "center",
            padding: 20,
            backgroundColor: "white",
            width: "90%",
            flexDirection: "row",
            borderRadius: 30,
            elevation: 5,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Flashcard #1
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              Luyện tập a,b,c
            </Text>
          </View>
          {button && (
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Link href={"/(flashcard)/cardUpdate"} asChild>
                <Pressable
                  style={{
                    backgroundColor: "#FFAF36",
                    borderRadius: 100,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                    }}
                    source={require("../../assets/images/support.png")}
                  />
                </Pressable>
              </Link>
              <Pressable
                style={{
                  backgroundColor: "#FF3636",
                  borderRadius: 100,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require("../../assets/images/trash.png")}
                />
              </Pressable>
            </View>
          )}
        </Pressable>
      </Link>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "#4ccd99",
        flex: 1,
      }}
    >
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 25,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                Xác nhận xoá flashcard
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                width: "80%",
              }}
            >
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{
                  width: "40%",
                  backgroundColor: "#3AFF36",
                  borderRadius: 15,
                  padding: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Đồng ý
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: "40%",
                  backgroundColor: "#FF3636",
                  borderRadius: 15,
                  padding: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Hủy
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          width: "auto",
          margin: 10,
          paddingVertical: 5,
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          backgroundColor: "#fff",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flex: 8 }}>
          <TextInput
            style={{
              backgroundColor: "transparent",
              fontSize: 24,
              color: "black",
              fontWeight: 600,
            }}
            placeholder="Nhập tên bộ flashcard"
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
            <Ionicons name="search" size={30} color="white" />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "white",
              alignSelf: "center",
              margin: 16,
            }}
          >
            Flashcard cá nhân
          </Text>
          <Link href="/(flashcard)/cardCreate" asChild>
            <Pressable>
              <Ionicons name="add-circle-outline" size={30} color="white" />
            </Pressable>
          </Link>
        </View>
        <Flashcard button={true} />
        <Flashcard button={true} />
        <Flashcard button={true} />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "white",
              alignSelf: "center",
              margin: 16,
            }}
          >
            Flashcard
          </Text>
        </View>
        <Flashcard button={false} />
        <Flashcard button={false} />
        <Flashcard button={false} />
      </ScrollView>
    </View>
  );
}
