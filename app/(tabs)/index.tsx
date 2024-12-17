import { Link } from "expo-router";
import { Text, View, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#4ccd99", flex: 1 }}>
      <View className="container mt-8 flex-row content-between justify-between ">
        <Link href="/token" asChild>
          <Pressable
            className="mx-auto w-auto h-13 justify-center drop-shadow-2xl shadow-black elevation-xl"
            style={{
              backgroundColor: "#007F73",
              borderRadius: 10,
              marginTop: 25,
              marginLeft: 30,
            }}
          >
            <Text className="ml-2 mr-2 justify-center content-center text-center font-bold color-white">
              12000 Token
            </Text>
          </Pressable>
        </Link>
        <View
          className="mx-auto w-auto h-14 drop-shadow-2xl shadow-black elevation-xl flex-row align-bottom "
          style={{
            marginRight: 20,
            marginTop: 25,
          }}
        >
          <Link href="/calendar" asChild>
            <Pressable
              style={{
                justifyContent: "center",
                marginRight: 20,
                borderRadius: 100,
                backgroundColor: "white",
              }}
            >
              <Image
                style={{
                  margin: 10,
                  width: 25,
                  height: 25,
                }}
                source={require("../../assets/images/calendar.png")}
              ></Image>
            </Pressable>
          </Link>
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
      <Text
        style={{
          marginTop: "30%",
          fontSize: 32,
          fontWeight: "bold",
          color: "white",
          margin: 16,
        }}
      >
        Xin chào,
      </Text>
      <View
        style={{
          borderStartStartRadius: 20,
          borderStartEndRadius: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
          alignSelf: "flex-end",
          flex: 1,
          backgroundColor: "white",
          paddingTop: 15,
          justifyContent: "center",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
          // style={{ width: "100%", padding: 10, flex: 1 }}
        >
          <Link href="/(quiz)" asChild>
            <Pressable
              style={{
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                backgroundColor: "#007f73",
                borderRadius: 10,
                padding: 20,
                width: "40%",
                height: 175,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Làm quiz
              </Text>
            </Pressable>
          </Link>
          <Link href="/(flashcard)" asChild>
            <Pressable
              style={{
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                backgroundColor: "#007f73",
                borderRadius: 10,
                padding: 20,
                width: "40%",
                height: 175,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Flashcard
              </Text>
            </Pressable>
          </Link>
          <Link href="/(translate)" asChild>
            <Pressable
              style={{
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                backgroundColor: "#007f73",
                borderRadius: 10,
                padding: 20,
                width: "40%",
                height: 175,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Dịch thuật
              </Text>
            </Pressable>
          </Link>
          <Link href="/(structure)" asChild>
            <Pressable
              style={{
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                backgroundColor: "#007f73",
                borderRadius: 10,
                padding: 20,
                width: "40%",
                height: 175,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Cấu trúc
              </Text>
            </Pressable>
          </Link>
          <View
            style={{
              elevation: 5,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              backgroundColor: "#007f73",
              borderRadius: 10,
              padding: 20,
              width: "40%",
              height: 175,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Sự kiện
            </Text>
          </View>
          <Link href={"/(noti)/"} asChild>
            <Pressable
              style={{
                elevation: 5,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                backgroundColor: "#007f73",
                borderRadius: 10,
                padding: 20,
                width: "40%",
                height: 175,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Thông báo
              </Text>
            </Pressable>
          </Link>
        </ScrollView>
      </View>
    </View>
  );
}
